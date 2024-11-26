import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Handle file change
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // Handle file upload and PDF generation
  const handleFileUpload = async () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    setIsLoading(true); // Start loading

    const formData = new FormData();
    formData.append("file", file); // The key is 'file' and the value is the uploaded file

    try {
      const response = await axios.post(
        "http://localhost:8080/upload", // Your backend endpoint
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("File uploaded successfully", response.data);

      // Check if PDFs are returned
      if (response.data.pdfs && response.data.pdfs.length > 0) {
        // Loop through the PDFs and create download links
        response.data.pdfs.forEach((pdfLink) => {
          const link = document.createElement("a");
          link.href = `http://localhost:8080/${pdfLink}`; // Make sure this is correct
          link.download = pdfLink.split("/").pop(); // Extract the filename from the URL
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        });
      } else {
        alert("No PDFs were generated.");
      }
    } catch (error) {
      console.error("Error uploading file", error);
      alert("Error uploading file.");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <h1>Upload a Text File</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload} disabled={isLoading}>
        {isLoading ? "Uploading..." : "Upload and Generate PDFs"}
      </button>
    </div>
  );
};

export default App;
