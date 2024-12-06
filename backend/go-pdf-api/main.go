package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"strings"

	"github.com/joho/godotenv"
	"github.com/jung-kurt/gofpdf"
	"github.com/rs/cors"
)

// Generate a styled PDF for a single record with a clean layout
func generateRecordPDF(headers []string, record []string, filename string) error {
	pdf := gofpdf.New("P", "mm", "A4", "")
	pdf.AddPage()

	// Set document margins
	pdf.SetMargins(20, 20, 20)

	// Add header
	pdf.SetFont("Arial", "B", 18)
	pdf.SetTextColor(0, 51, 102) // Dark Blue
	pdf.CellFormat(0, 12, "Record Details", "", 1, "C", false, 0, "")
	pdf.Ln(10)

	// Add a subtle horizontal line under the title
	pdf.SetLineWidth(0.5)
	pdf.SetDrawColor(0, 51, 102)
	pdf.Line(20, pdf.GetY(), 190, pdf.GetY())
	pdf.Ln(10)

	// Key-Value Layout
	pdf.SetFont("Arial", "", 12)
	lineHeight := 8.0

	for i, header := range headers {
		if i < len(record) {
			// Check if content fits on the current page
			if pdf.GetY()+lineHeight > 280 {
				// Add footer before starting a new page
				addFooter(pdf)
				pdf.AddPage()
			}

			// Key (Header)
			pdf.SetFont("Arial", "B", 12)
			pdf.SetTextColor(0, 51, 153) // Blue for keys
			pdf.CellFormat(60, lineHeight, header+":", "1", 0, "L", false, 0, "")

			// Value
			pdf.SetFont("Arial", "", 12)
			pdf.SetTextColor(0, 0, 0) // Black for values
			pdf.MultiCell(0, lineHeight, record[i], "1", "L", false)

			pdf.Ln(2) // Small gap between rows
		}
	}

	// Add footer before saving
	addFooter(pdf)

	// Save the PDF to the specified file
	return pdf.OutputFileAndClose(filename)
}

// Add a footer with page numbers
func addFooter(pdf *gofpdf.Fpdf) {
	pdf.SetY(-15) // Move to the bottom of the page
	pdf.SetFont("Arial", "I", 10)
	pdf.SetTextColor(128, 128, 128)
	pdf.CellFormat(0, 10, fmt.Sprintf("Page %d", pdf.PageNo()), "", 0, "C", false, 0, "")
}

func uploadHandler(w http.ResponseWriter, r *http.Request) {
	// Handle file upload
	err := r.ParseMultipartForm(10 << 20) // Limit file size to 10MB
	if err != nil {
		http.Error(w, "Unable to parse file", http.StatusBadRequest)
		return
	}

	// Get the uploaded file
	file, _, err := r.FormFile("file")
	if err != nil {
		http.Error(w, "Error retrieving file", http.StatusBadRequest)
		return
	}
	defer file.Close()

	// Read the file content
	fileContent, err := ioutil.ReadAll(file)
	if err != nil {
		http.Error(w, "Error reading file", http.StatusInternalServerError)
		return
	}

	// Process the file content
	lines := strings.Split(string(fileContent), "\n")
	if len(lines) < 2 {
		http.Error(w, "Insufficient data in the file", http.StatusBadRequest)
		return
	}

	// Extract headers and records
	headers := strings.Split(lines[0], ",")
	var pdfFiles []string

	// Get output directory from environment variable
	outputDir := os.Getenv("PDF_OUTPUT_DIR")
	if outputDir == "" {
		http.Error(w, "PDF_OUTPUT_DIR not set in .env file", http.StatusInternalServerError)
		return
	}
	os.MkdirAll(outputDir, os.ModePerm)

	for i, line := range lines[1:] {
		if strings.TrimSpace(line) == "" {
			continue // Skip empty lines
		}

		record := strings.Split(line, ",")
		filename := fmt.Sprintf("%s/generated%d.pdf", outputDir, i+1)
		err := generateRecordPDF(headers, record, filename)
		if err != nil {
			http.Error(w, "Error generating PDF", http.StatusInternalServerError)
			return
		}
		pdfFiles = append(pdfFiles, filename)
	}

	// Return the list of generated PDFs
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]interface{}{
		"pdfs": pdfFiles,
	})
}

func main() {
	// Load .env file
	err := godotenv.Load()
	if err != nil {
		fmt.Println("Error loading .env file:", err)
		os.Exit(1)
	}

	// Serve uploaded PDFs
	http.Handle("/uploads/", http.StripPrefix("/uploads/", http.FileServer(http.Dir("uploads/"))))

	// Handle file upload and PDF generation
	http.HandleFunc("/upload", uploadHandler)

	// Enable CORS for your frontend
	c := cors.New(cors.Options{
		AllowedOrigins: []string{"http://localhost:3000"}, // Replace with your frontend URL
		AllowedMethods: []string{"GET", "POST"},
		AllowedHeaders: []string{"Content-Type"},
	})
	handler := c.Handler(http.DefaultServeMux)

	// Start the server with CORS handler
	fmt.Println("Server started on http://localhost:8080")
	err = http.ListenAndServe(":8080", handler)
	if err != nil {
		fmt.Println("Error starting server:", err)
	}
}
