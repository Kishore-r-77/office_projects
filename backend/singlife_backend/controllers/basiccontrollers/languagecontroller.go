package basiccontrollers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/kishoreFuturaInsTech/single_backend/initializers"
	"github.com/kishoreFuturaInsTech/single_backend/models"
	"github.com/kishoreFuturaInsTech/single_backend/utilities"
	"gorm.io/gorm"
)

// Get All Function
// This function Name we need to add it in main.go
func GetAllLanguage(c *gin.Context) {
	// Here User Id, User Group and Method of the function passed to GetUserAccess function

	user, _ := c.Get("user")
	method := "GetAllLanguage"
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
	queryParams := c.Request.URL.Query()
	searchString := ""
	searchCriteria := ""
	firstTime := false
	if queryParams.Has("searchString") {
		searchString = queryParams.Get("searchString")
	}

	if queryParams.Has("searchCriteria") {
		searchCriteria = queryParams.Get("searchCriteria")
	}

	if queryParams.Has("firstTime") {
		firstTime, _ = strconv.ParseBool(queryParams.Get("firstTime"))

	}
	fmt.Println(userdatamap)
	//Get All in an array
	var getalllanguage []models.Language
	// run the query and save values into results.
	// similar to select * from <Table Name> and save it to results
	var result *gorm.DB
	if searchString != "" && searchCriteria != "" {
		// fmt.Println("Inside Criteria")
		// fmt.Println(searchCriteria)
		// fmt.Println(searchString)

		result = initializers.DB.Where(searchCriteria+" LIKE ?", "%"+searchString+"%").Find(&getalllanguage)

	} else {
		result = initializers.DB.Find(&getalllanguage)
		fmt.Println("not in criteria")
		fmt.Println(searchCriteria)
		fmt.Println(searchString)
	}

	// if result is null, then give an language ..
	if result.Error != nil {
		shortCode := "GL072"
		longDesc, _ := utilities.GetErrorDesc(userco, userlan, shortCode)
		c.JSON(http.StatusBadRequest, gin.H{
			"error": shortCode + " : " + longDesc,
		})
		// skip the funciton
		return

	}

	// return the values to Postman in JSON format
	// Provide Search Fields... currently 2 fields are used.

	if firstTime {
		var fieldMap = make(map[string]string)
		fieldMap["Long Description"] = "lang_long_name"
		fieldMap["Language Code"] = "lang_short_name"
		fieldMap["IS Valid???"] = "is_valid"
		fieldMap["Updated by Whome????"] = "update_id"
		c.JSON(200, gin.H{

			"All Languages": getalllanguage,
			"Field Map":     fieldMap,
		})

	} else {
		c.JSON(200, gin.H{

			"All Languages": getalllanguage,
		})
	}

}

// Create Function

func CreateLanguage(c *gin.Context) {
	// store it in working storage variable
	// field description in cobol
	user, _ := c.Get("user")
	method := "CreateLanguage"
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
	var createlanguage models.Language

	err1 := c.Bind(&createlanguage)
	//if c.Bind(&createlanguage) != nil {
	if err1 != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err1.Error(),
		})

		return
	}

	result := initializers.DB.Create(&createlanguage)

	if result.Error != nil {
		shortCode := "GL073"
		longDesc, _ := utilities.GetErrorDesc(userco, userlan, shortCode)
		c.JSON(http.StatusBadRequest, gin.H{
			"error": shortCode + " : " + longDesc,
		})

		return

	}
	//response
	shortCode := "GL356"
	longDesc, _ := utilities.GetErrorDesc(userco, userlan, shortCode)
	c.JSON(http.StatusOK, gin.H{
		"Result": shortCode + " : " + longDesc,
	})

}

//Delete Function

func DeleteLanguage(c *gin.Context) {

	user, _ := c.Get("user")
	method := "DeleteLanguage"
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
	delid := c.Param("id")

	var dellanguage models.Language
	result := initializers.DB.First(&dellanguage, "id  = ?", delid)
	fmt.Println(dellanguage)
	if result.Error != nil {
		shortCode := "GL058"
		longDesc, _ := utilities.GetErrorDesc(userco, userlan, shortCode)
		c.JSON(http.StatusBadRequest, gin.H{
			"error": shortCode + " : " + longDesc + "-" + result.Error.Error(),
		})

		return

	}

	result = initializers.DB.Delete(&dellanguage)

	if result.Error != nil {
		shortCode := "GL038"
		longDesc, _ := utilities.GetErrorDesc(userco, userlan, shortCode)
		c.JSON(http.StatusBadRequest, gin.H{
			"error": shortCode + " : " + longDesc + "-" + result.Error.Error(),
		})

		return

	}

	c.JSON(http.StatusOK, "Language ID "+delid+" is deleted")

}

// Get Function
func GetLanguage(c *gin.Context) {

	user, _ := c.Get("user")
	method := "GetLanguage"

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
	getid := c.Param("id")

	//var out1 = utilities.sumofvariables(1, 2)

	fmt.Println("rangarajan ")

	var getlanguage models.Language
	result := initializers.DB.First(&getlanguage, "id  = ?", getid)
	if result.Error != nil {
		shortCode := "GL058"
		longDesc, _ := utilities.GetErrorDesc(userco, userlan, shortCode)
		c.JSON(http.StatusBadRequest, gin.H{
			"error": shortCode + " : " + longDesc + "-" + result.Error.Error(),
		})

		return

	}
	// return the values to postman
	c.JSON(200, gin.H{
		"Language": getlanguage,
	})

}

/*
// clone only selective fields  Method 1  Field by Field
func CloneCompany(c *gin.Context) {
	sid := c.Param("id")
	//fmt.Println("ID " + sid)

	var sco models.Company
	result := initializers.DB.First(&sco, "id  = ?", sid)
	//fmt.Println((sco.CompanyName))
	if result.Language != nil {

		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to get :" + result.Language.Language(),
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
	tco.IsActive = sco.IsActive
	tco.OwnerId = sco.OwnerId

	result = initializers.DB.Create(&tco)
	if result.Language != nil {

		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Failed to Clone :" + result.Language.Language(),
		})

		return

	}
	// return the values to postman
	c.JSON(200, gin.H{
		"Company": tco,
	})

}
*/
// Clone all fields
func CloneLanguage(c *gin.Context) {
	user, _ := c.Get("user")
	method := "CloneLanguage"
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
	sourceid := c.Param("id")
	//fmt.Println("ID " + sid)

	var slanguage models.Language
	result := initializers.DB.First(&slanguage, "id  = ?", sourceid)
	//fmt.Println((sco.CompanyName))
	if result.Error != nil {
		shortCode := "GL058"
		longDesc, _ := utilities.GetErrorDesc(userco, userlan, shortCode)
		c.JSON(http.StatusBadRequest, gin.H{
			"error": shortCode + " : " + longDesc + "-" + result.Error.Error(),
		})

		return

	}
	// Declaring a Map so that i could move all or selective values into my Map
	var sourceMap map[string]interface{}
	// converting an entity(Model) to Json
	data, _ := json.Marshal(slanguage)
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
	var tlanguage models.Language
	// converting json to a model
	json.Unmarshal(data, &tlanguage)
	// edecuting query persisting the model
	result = initializers.DB.Create(&tlanguage)
	if result.Error != nil {
		shortCode := "GL039"
		longDesc, _ := utilities.GetErrorDesc(userco, userlan, shortCode)
		c.JSON(http.StatusBadRequest, gin.H{
			"error": shortCode + " : " + longDesc + "-" + result.Error.Error(),
		})

		return

	}
	// return the values to postman
	c.JSON(200, gin.H{
		"Cloned": tlanguage,
	})

}

// Modify Function
func ModifyLanguage(c *gin.Context) {
	// mapping json to sourceMap
	user, _ := c.Get("user")
	method := "ModifyLanguage"
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
		shortCode := "GL074"
		longDesc, _ := utilities.GetErrorDesc(userco, userlan, shortCode)
		c.JSON(http.StatusBadRequest, gin.H{
			"error": shortCode + " : " + longDesc,
		})

		return

	}

	var olanguage models.Language

	result := initializers.DB.First(&olanguage, "id  = ?", sourceMap["ID"])
	if result.Error != nil {
		shortCode := "GL058"
		longDesc, _ := utilities.GetErrorDesc(userco, userlan, shortCode)
		c.JSON(http.StatusBadRequest, gin.H{
			"error": shortCode + " : " + longDesc + "-" + result.Error.Error(),
		})

		return

	}
	var targetMap map[string]interface{}
	fmt.Println((targetMap))
	data, _ := json.Marshal(olanguage)

	json.Unmarshal(data, &targetMap)

	for key, _ := range targetMap {

		if val1, ok := sourceMap[key]; ok {
			targetMap[key] = val1
		}

	}

	data, _ = json.Marshal(targetMap)
	json.Unmarshal(data, &olanguage)
	// update modified time
	//olanguage.UpdatedAt = time.Now()
	//olanguage.UpdatedID := iid
	fmt.Println("MOdified User")
	updateduserid := userdatamap["Id"]
	fmt.Println(updateduserid)
	//olanguage.UpdatedID = updateduserid

	result = initializers.DB.Save(&olanguage)

	if result.Error != nil {
		shortCode := "GL041"
		longDesc, _ := utilities.GetErrorDesc(userco, userlan, shortCode)
		c.JSON(http.StatusOK, gin.H{
			"error": shortCode + " : " + longDesc + "-" + result.Error.Error(),
		})

		return

	}

	c.JSON(http.StatusOK, gin.H{"outputs": olanguage})

}
