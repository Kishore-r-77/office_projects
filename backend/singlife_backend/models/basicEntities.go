package models

import (
	"database/sql"
	"github.com/kishoreFuturaInsTech/single_backend/models/quotation"
	"github.com/kishoreFuturaInsTech/single_backend/types"
	"gorm.io/gorm"
)

type BusinessDate struct {
	gorm.Model
	types.CModel
	UserID uint
	Department uint
	Date       string `gorm:"type:varchar(08)"`
}

type Company struct {
	gorm.Model
	CompanyName              string `gorm:"type:varchar(80)"`
	CompanyAddress1          string `gorm:"type:varchar(80)"`
	CompanyAddress2          string `gorm:"type:varchar(80)"`
	CompanyAddress3          string `gorm:"type:varchar(80)"`
	CompanyAddress4          string `gorm:"type:varchar(80)"`
	CompanyAddress5          string `gorm:"type:varchar(80)"`
	CompanyPostalCode        string `gorm:"type:varchar(80)"`
	CompanyCountry           string `gorm:"type:varchar(80)"`
	CompanyUid               string `gorm:"type:varchar(40)"`
	CompanyGst               string `gorm:"type:varchar(40)"`
	CompanyPan               string `gorm:"type:varchar(40)"`
	CompanyTan               string `gorm:"type:varchar(40)"`
	CompanyLogo              string `gorm:"type:longtext"`
	CompanyIncorporationDate string `gorm:"type:varchar(08)"`
	CompanyTerminationDate   string `gorm:"type:varchar(08)"`
	CompanyStatusID          uint
	CurrencyID               uint   // P0030  USD2INR
	NationalIdentityMand     string `gorm:"type:varchar(01)"`
	NationalIdentityEncrypt  string `gorm:"type:varchar(01)"`
	Users           []User
	Errors          []Error
	UserGroups      []UserGroup
	Permissions     []Permission
}

type CompanyStatus struct {
	gorm.Model
	ClientStatusShortName string `gorm:"type:varchar(8)"`
	ClientStatusLongName  string `gorm:"type:varchar(50)"`
	Companies             []Company
}

type Currency struct {
	gorm.Model
	CurrencyShortName string `gorm:"type:varchar(03)"`
	CurrencyLongName  string `gorm:"type:varchar(50)"`
	Companies         []Company
}

type Error struct {
	gorm.Model
	types.CModel
	ShortCode  string `gorm:"type:varchar(05)"`
	LongCode   string `gorm:"type:varchar(80)"`
	LanguageID uint
}

type Permission struct {
	gorm.Model
	types.CModel
	ModelName string `gorm:"type:varchar(100)"`
	Method    string `gorm:"type:varchar(100)"`
	sql.NullInt gives nullable value
	UserID      sql.NullInt64
	UserGroupID sql.NullInt64
	UserID        sql.NullInt64
	UserGroupID   sql.NullInt64
	TransactionID uint
}

type Transaction struct {
	gorm.Model
	types.CModel
	Method      string `gorm:"type:varchar(50)"`
	Description string `gorm:"type:varchar(50)"`
	Permissions []Permission
}

type Language struct {
	gorm.Model
	LangShortName string `gorm:"type:varchar(2)"`
	LangLongName  string `gorm:"type:varchar(100)"`
	Users         []User
	Errors []Error
}

type Error struct {
	gorm.Model
	types.CModel
	ShortCode  string `gorm:"type:varchar(05)"`
	LongCode   string `gorm:"type:varchar(80)"`
	LanguageID uint
}

type User struct {
	Id                      uint64        `gorm:"type:bigint;primaryKey;autoIncrement:true;"`
	Email                   string        `gorm:"type:varchar(50);unique"`
	Is_valid                types.BitBool `gorm:"type:bit(1)"`
	Name                    string        `gorm:"type:varchar(50)"`
	Password                string        `gorm:"type:varchar(100)"`
	Phone                   string        `gorm:"type:varchar(50);unique"`
	Auth_secret             string        `gorm:"type:varchar(50)"`
	Last_logged_inipaddress string        `gorm:"type:varchar(25)"`
	Last_logged_in_datime   time.Time
	DateFrom                string `gorm:"type:varchar(08)"`
	DateTo                  string `gorm:"type:varchar(08)"`
	Permissions             []Permission
	Profile                 string `gorm:"type:longtext"`
	VerficationCode         string `gorm:"type:varchar(10)"`
	LanguageID              uint
	Gender                  string `gorm:"type:varchar(1)"`
	UserGroupID             uint
	CompanyID               uint
	UserStatusID            uint
	BusinessDates           []BusinessDate
}

type UserGroup struct {
	gorm.Model
	types.CModel
	GroupName   string `gorm:"type:varchar(100)"`
	ValidFrom   string `gorm:"type:varchar(08)"`
	ValidTo     string `gorm:"type:varchar(08)"`
	Users       []User
	Permissions []Permission
}