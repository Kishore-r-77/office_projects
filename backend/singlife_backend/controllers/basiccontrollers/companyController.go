package basiccontrollers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/kishoreFuturaInsTech/single_backend/initializers"
	"github.com/kishoreFuturaInsTech/single_backend/models"
	"github.com/kishoreFuturaInsTech/single_backend/types"
	"github.com/kishoreFuturaInsTech/single_backend/utilities"
	"gorm.io/gorm"
)

// Get All Companies
// This function Name we need to add it in main.go
func GetAllCompanies(c *gin.Context) {

	user, _ := c.Get("user")
	method := "GetAllCompanies" //B0021
	//var userdatamap map[string]interface{}
	//_, err := utilities.GetUserAccess(user, method)
	userdatamap, err := utilities.GetUserAccess(user, method)
	userco := uint(userdatamap["CompanyId"].(float64))
	userlan := uint(userdatamap["LanguageId"].(float64))

	if err != nil {
		shortCode := "GL001"
		longDesc, _ := utilities.GetErrorDesc(userco, userlan, shortCode)
		c.JSON(http.StatusBadRequest, gin.H{
			"error": shortCode + " : " + longDesc + "-" + method,
		})

		return
	}
	// Filter Variables
	// search and pagination
	var searchpagination types.SearchPagination

	temp, _ := c.Get("searchpagination")
	searchpagination, ok := temp.(types.SearchPagination)
	fmt.Println("OK Value")
	fmt.Println(ok)

	if searchpagination.SortColumn == "" {
		searchpagination.SortColumn = "id"
		searchpagination.SortDirection = "asc"
	}

	fmt.Println(ok)
	var totalRecords int64 = 0

	var getallcompany []models.Company
	//userco := userdatamap["CompanyId"]
	fmt.Println(userco)

	var result *gorm.DB

	if searchpagination.SearchString != "" && searchpagination.SearchCriteria != "" {
		result = initializers.DB.Model(&models.Company{}).Where(searchpagination.SearchCriteria+" LIKE ? ", "%"+searchpagination.SearchString+"%").Count(&totalRecords)
		result = initializers.DB.Model(&models.Company{}).
			Where(searchpagination.SearchCriteria+" LIKE ? ", "%"+searchpagination.SearchString+"%").
			Order(searchpagination.SortColumn + " " + searchpagination.SortDirection).
			Limit(searchpagination.PageSize).Offset(searchpagination.Offset).
			Find(&getallcompany)

	} else {
		fmt.Println("No Selection ")
		fmt.Println(searchpagination.SearchCriteria)
		fmt.Println(searchpagination.SearchString)
		result = initializers.DB.Model(&models.Company{}).Count(&totalRecords)
		result = initializers.DB.Model(&models.Company{}).
			Order(searchpagination.SortColumn + " " + searchpagination.SortDirection).
			Limit(searchpagination.PageSize).Offset(searchpagination.Offset).
			Find(&getallcompany)
	}

	// if result is null, then give an language ..
	if result.Error != nil {
		shortCode := "GL055"
		longDesc, _ := utilities.GetErrorDesc(userco, userlan, shortCode)
		c.JSON(http.StatusBadRequest, gin.H{
			"error": shortCode + " : " + longDesc,
		})
		// skip the funciton
		return

	}
	paginationData := map[string]interface{}{
		"totalRecords": totalRecords,
	}
	// return the values to Postman in JSON format
	// Provide Search Fields... currently 2 fields are used.

	if searchpagination.FirstTime {
		fieldMappings := [3]map[string]string{{
			"displayName": "Company  Name",
			"fieldName":   "company_name",
			"dataType":    "string"},
			{"displayName": "Company Address Line 1",
				"fieldName": "company_address1",
				"dataType":  "string"},
			{"displayName": "Company Unique ID",
				"fieldName": "company_uid",
				"dataType":  "string"},
		}

		c.JSON(200, gin.H{

			"All Companies":  getallcompany,
			"Field Map":      fieldMappings,
			"paginationData": paginationData,
		})

	} else {
		c.JSON(200, gin.H{

			"All Companies":  getallcompany,
			"paginationData": paginationData,
		})
	}

}

// Create Company

func CreateCompany(c *gin.Context) {
	// store it in working storage variable
	// field description in cobol

	var createcompany models.Company //B0022
	user, _ := c.Get("user")
	method := "CreateCompany" //B0021
	//var userdatamap map[string]interface{}
	//_, err := utilities.GetUserAccess(user, method)
	userdatamap, _ := utilities.GetUserAccess(user, method)
	userco := uint(userdatamap["CompanyId"].(float64))
	userlan := uint(userdatamap["LanguageId"].(float64))

	if c.Bind(&createcompany) != nil {
		shortCode := "GL056"
		longDesc, _ := utilities.GetErrorDesc(userco, userlan, shortCode)
		c.JSON(http.StatusBadRequest, gin.H{
			"error": shortCode + " : " + longDesc,
		})

		return
	}

	createcompany.CreatedAt = time.Now()

	result := initializers.DB.Create(&createcompany)

	if result.Error != nil {
		shortCode := "GL057"
		longDesc, _ := utilities.GetErrorDesc(userco, userlan, shortCode)
		c.JSON(http.StatusBadRequest, gin.H{
			"error": shortCode + " : " + longDesc,
		})

		return

	}
	//respond
	c.Status(200)
	c.JSON(200, gin.H{
		"Company Created": createcompany,
	})

}

//Delete Function

func DeleteCompany(c *gin.Context) {
	delid := c.Param("id") //B0023
	user, _ := c.Get("user")
	method := "DeleteCompany" //B0021
	//var userdatamap map[string]interface{}
	//_, err := utilities.GetUserAccess(user, method)
	userdatamap, _ := utilities.GetUserAccess(user, method)
	userco := uint(userdatamap["CompanyId"].(float64))
	userlan := uint(userdatamap["LanguageId"].(float64))

	var delcompany models.Company
	result := initializers.DB.First(&delcompany, "id  = ?", delid)
	if result.Error != nil {
		shortCode := "GL058"
		longDesc, _ := utilities.GetErrorDesc(userco, userlan, shortCode)
		c.JSON(http.StatusBadRequest, gin.H{
			"error": shortCode + " : " + longDesc + " - " + result.Error.Error(),
		})

		return

	}

	result = initializers.DB.Delete(&delcompany)

	if result.Error != nil {
		shortCode := "GL038"
		longDesc, _ := utilities.GetErrorDesc(userco, userlan, shortCode)
		c.JSON(http.StatusBadRequest, gin.H{
			"error": shortCode + " : " + longDesc + " - " + result.Error.Error(),
		})

		return

	}

	c.JSON(http.StatusOK, "Company ID "+delid+" is deleted")

}

// Get Company
func GetCompany(c *gin.Context) {
	wid := c.Param("id")
	user, _ := c.Get("user")
	method := "GetCompany" //B0021
	//var userdatamap map[string]interface{}
	//_, err := utilities.GetUserAccess(user, method)
	userdatamap, _ := utilities.GetUserAccess(user, method)
	userco := uint(userdatamap["CompanyId"].(float64))
	userlan := uint(userdatamap["LanguageId"].(float64))

	var wco models.Company //B0024
	result := initializers.DB.First(&wco, "id  = ?", wid)
	if result.Error != nil {
		shortCode := "GL058"
		longDesc, _ := utilities.GetErrorDesc(userco, userlan, shortCode)
		c.JSON(http.StatusBadRequest, gin.H{
			"error": shortCode + " : " + longDesc + " - " + result.Error.Error(),
		})

		return

	}
	// return the values to postman
	c.JSON(200, gin.H{
		"Company": wco,
	})

}

// clone only selective fields
func CloneCompany(c *gin.Context) {
	sid := c.Param("id")
	//fmt.Println("ID " + sid)
	user, _ := c.Get("user")
	method := "CloneCompany" //B0021
	//var userdatamap map[string]interface{}
	//_, err := utilities.GetUserAccess(user, method)
	userdatamap, _ := utilities.GetUserAccess(user, method)
	userco := uint(userdatamap["CompanyId"].(float64))
	userlan := uint(userdatamap["LanguageId"].(float64))

	var sco models.Company //B0025
	result := initializers.DB.First(&sco, "id  = ?", sid)
	//fmt.Println((sco.CompanyName))
	if result.Error != nil {
		shortCode := "GL058"
		longDesc, _ := utilities.GetErrorDesc(userco, userlan, shortCode)
		c.JSON(http.StatusBadRequest, gin.H{
			"error": shortCode + " : " + longDesc + " - " + result.Error.Error(),
		})

		return

	}
	// return the values to postman
	var tco models.Company
	tco.CompanyAddress1 = sco.CompanyAddress1
	tco.CompanyAddress2 = sco.CompanyAddress2
	tco.CompanyAddress3 = sco.CompanyAddress3
	tco.CompanyAddress4 = sco.CompanyAddress4
	tco.CompanyAddress5 = sco.CompanyAddress5
	tco.CompanyGst = sco.CompanyGst
	tco.CompanyIncorporationDate = sco.CompanyIncorporationDate
	tco.CompanyName = sco.CompanyName
	tco.CompanyUid = sco.CompanyUid
	tco.CreatedAt = time.Now()

	result = initializers.DB.Create(&tco)
	if result.Error != nil {
		shortCode := "GL039"
		longDesc, _ := utilities.GetErrorDesc(userco, userlan, shortCode)
		c.JSON(http.StatusBadRequest, gin.H{
			"error": shortCode + " : " + longDesc + " - " + result.Error.Error(),
		})

		return

	}
	// return the values to postman
	c.JSON(200, gin.H{
		"Company": tco,
	})

}

// Clone all fields
func CloneCompany1(c *gin.Context) {
	sid := c.Param("id")
	//fmt.Println("ID " + sid)
	user, _ := c.Get("user")
	method := "CloneCompany1" //B0021
	//var userdatamap map[string]interface{}
	//_, err := utilities.GetUserAccess(user, method)
	userdatamap, _ := utilities.GetUserAccess(user, method)
	userco := uint(userdatamap["CompanyId"].(float64))
	userlan := uint(userdatamap["LanguageId"].(float64))

	var sco models.Company //B0026
	result := initializers.DB.First(&sco, "id  = ?", sid)
	//fmt.Println((sco.CompanyName))
	if result.Error != nil {
		shortCode := "GL058"
		longDesc, _ := utilities.GetErrorDesc(userco, userlan, shortCode)
		c.JSON(http.StatusBadRequest, gin.H{
			"error": shortCode + " : " + longDesc + " - " + result.Error.Error(),
		})

		return

	}
	// Declaring a Map so that i could move all or selective values into my Map
	var sourceMap map[string]interface{}
	// converting an entity(Model) to Json
	data, _ := json.Marshal(sco)
	//converting Json to Source Map
	json.Unmarshal(data, &sourceMap)

	var targetMap = make(map[string]interface{})

	// moving all values except ID
	for key, val := range sourceMap {

		if key != "ID" {
			targetMap[key] = val
		}

	}
	// converting target map to a json
	data, _ = json.Marshal(targetMap)
	// creating a local model
	var tco models.Company
	// converting json to a model
	json.Unmarshal(data, &tco)
	// edecuting query persisting the model
	result = initializers.DB.Create(&tco)
	if result.Error != nil {
		shortCode := "GL039"
		longDesc, _ := utilities.GetErrorDesc(userco, userlan, shortCode)
		c.JSON(http.StatusBadRequest, gin.H{
			"error": shortCode + " : " + longDesc + " - " + result.Error.Error(),
		})

		return

	}
	// return the values to postman
	c.JSON(200, gin.H{
		"Cloned": tco,
	})

}

// Modify Function
func ModifyCompany(c *gin.Context) {
	// mapping json to sourceMap
	user, _ := c.Get("user")
	method := "ModifyCompany" //B0027
	//var userdatamap map[string]interface{}
	userdatamap, err := utilities.GetUserAccess(user, method)
	userco := uint(userdatamap["CompanyId"].(float64))
	userlan := uint(userdatamap["LanguageId"].(float64))

	if err != nil {
		shortCode := "GL001"
		longDesc, _ := utilities.GetErrorDesc(userco, userlan, shortCode)
		c.JSON(http.StatusBadRequest, gin.H{
			"error": shortCode + " : " + longDesc + "-" + method,
		})

		return
	}
	fmt.Println(userdatamap)
	var sourceMap map[string]interface{}

	if c.Bind(&sourceMap) != nil {
		shortCode := "GL056"
		longDesc, _ := utilities.GetErrorDesc(userco, userlan, shortCode)
		c.JSON(http.StatusBadRequest, gin.H{
			"error": shortCode + " : " + longDesc,
		})

		return

	}

	var ocompany models.Company

	result := initializers.DB.First(&ocompany, "id  = ?", sourceMap["ID"])
	if result.Error != nil {
		shortCode := "GL058"
		longDesc, _ := utilities.GetErrorDesc(userco, userlan, shortCode)
		c.JSON(http.StatusBadRequest, gin.H{
			"error": shortCode + " : " + longDesc + "" + result.Error.Error(),
		})

		return

	}
	var targetMap map[string]interface{}
	fmt.Println((targetMap))
	data, _ := json.Marshal(ocompany)

	json.Unmarshal(data, &targetMap)

	for key, _ := range targetMap {

		if val1, ok := sourceMap[key]; ok {
			targetMap[key] = val1
		}

	}

	data, _ = json.Marshal(targetMap)
	json.Unmarshal(data, &ocompany)
	// update modified time
	//ocompany.UpdatedAt = time.Now()
	//ocompany.UpdatedID := iid
	fmt.Println("MOdified User")
	updateduserid := userdatamap["Id"]
	fmt.Println(updateduserid)
	//ocompany.UpdatedID = updateduserid
	result = initializers.DB.Save(&ocompany)

	if result.Error != nil {
		shortCode := "GL041"
		longDesc, _ := utilities.GetErrorDesc(userco, userlan, shortCode)
		c.JSON(http.StatusBadRequest, gin.H{
			"error": shortCode + " : " + longDesc + "" + result.Error.Error(),
		})

		return

	}

	c.JSON(http.StatusOK, gin.H{"outputs": ocompany})

}

func GetAllCurrencies(c *gin.Context) {

	var currencies []models.Currency
	user, _ := c.Get("user")
	method := "GetAllCurrencies" //B0027
	//var userdatamap map[string]interface{}
	userdatamap, _ := utilities.GetUserAccess(user, method)
	userco := uint(userdatamap["CompanyId"].(float64))
	userlan := uint(userdatamap["LanguageId"].(float64))

	results := initializers.DB.Find(&currencies)
	if results.Error != nil {
		shortCode := "GL058"
		longDesc, _ := utilities.GetErrorDesc(userco, userlan, shortCode)
		c.JSON(http.StatusBadRequest, gin.H{
			"error": shortCode + " : " + longDesc + "" + results.Error.Error(),
		})

		return

	}

	c.JSON(http.StatusOK, gin.H{"currencies": currencies})

}
