package utilities

import (
	"errors"
	"strconv"
	"time"

	"github.com/kishoreFuturaInsTech/single_backend/initializers"
	"github.com/kishoreFuturaInsTech/single_backend/models"
	"github.com/kishoreFuturaInsTech/single_backend/paramTypes"
)

func GetErrorDesc(iCompany uint, iLanguage uint, iShortCode string) (string, error) {
	var errorenq models.Error

	result := initializers.DB.Find(&errorenq, "company_id = ? and language_id = ? and short_code = ?", iCompany, iLanguage, iShortCode)

	if result.Error != nil || result.RowsAffected == 0 {
		return "", errors.New(" -" + strconv.FormatUint(uint64(iCompany), 10) + "-" + "-" + strconv.FormatUint(uint64(iLanguage), 10) + "-" + " is missing")
	}

	return errorenq.LongCode, nil
}

func Date2String(iDate time.Time) (odate string) {

	var temp string
	temp = iDate.String()
	temp1 := temp[0:4] + temp[5:7] + temp[8:10]
	// fmt.Println("Rangarajan Ramaujam ***********")
	// fmt.Println(iDate)
	// fmt.Println(temp1)
	odate = temp1
	return odate

}

func GetBusinessDate(iCompany uint, iUser uint, iDepartment uint) (oDate string) {
	var businessdate models.BusinessDate
	// Get with User
	result := initializers.DB.Find(&businessdate, "company_id = ? and user_id = ? and department = ? and user_id IS NOT NULL and department IS NOT NULL", iCompany, iUser, iDepartment)
	if result.RowsAffected == 0 {
		// If User Not Found, get with Department
		result = initializers.DB.Find(&businessdate, "company_id = ? and department = ? and user_id IS NULL ", iCompany, iDepartment)
		if result.RowsAffected == 0 {
			// If Department Not Found, get with comapny
			result = initializers.DB.Find(&businessdate, "company_id = ? and department IS NULL and user_id IS NULL", iCompany)
			if result.RowsAffected == 0 {
				return Date2String(time.Now())

			} else {
				oDate := businessdate.Date
				return oDate
			}
		} else {
			oDate := businessdate.Date
			return oDate
		}

	} else {
		oDate := businessdate.Date
		return oDate
	}

}

func GetItemD(iCompany int, iTable string, iItem string, iFrom string, data *paramTypes.Extradata) error {

	//var sourceMap map[string]interface{}
	var itemparam models.Param
	//	fmt.Println(iCompany, iItem, iFrom)
	results := initializers.DB.Find(&itemparam, "company_id =? and name= ? and item = ? and rec_type = ? and ? between start_date  and  end_date", iCompany, iTable, iItem, "IT", iFrom)

	if results.Error == nil && results.RowsAffected != 0 {
		(*data).ParseData(itemparam.Data)
		return nil
	} else {
		if results.Error != nil {
			return errors.New(results.Error.Error())
		} else {
			return errors.New("No Item Found " + iTable + iItem)
		}

	}
}
