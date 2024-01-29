package utilities

import (
	"errors"
	"fmt"
	"time"

	"github.com/google/uuid"
	"github.com/kishoreFuturaInsTech/single_backend/initializers"
	"github.com/kishoreFuturaInsTech/single_backend/models"
	"github.com/kishoreFuturaInsTech/single_backend/types"
	"gorm.io/gorm"
)

func GetVersionId(iCompany uint, lockedType types.LockedType, lockedTypeKey string) (string, error) {
	var tranLock models.TransactionLock
	result := initializers.DB.First(&tranLock, "company_id = ? and locked_type = ? and locked_type_key = ?", iCompany, lockedType, lockedTypeKey)

	recordNotFound := errors.Is(result.Error, gorm.ErrRecordNotFound)

	if !recordNotFound && result.Error != nil {
		return "", result.Error
	}

	if recordNotFound {
		fmt.Println("creating the entity as it does not exist:" + lockedTypeKey + ":" + lockedTypeKey)
		versionid, err := CreateTheEntity(iCompany, lockedType, lockedTypeKey)
		if err != nil {
			return "", errors.New("entity did not exist,error while trying to create :" + err.Error())
		} else {
			return versionid, nil
		}
	}

	if !tranLock.IsValid {
		return "", errors.New("entity is not valid")
	}

	/*if tranLock.IsLocked {
		return "", errors.New("entity is locked")

	} */
	return tranLock.VersionId, nil

}

func LockTheEntity(iCompany uint, lockedType types.LockedType, lockedTypeKey string, versionID string, iUserId uint64) error {

	var tranLock models.TransactionLock
	result := initializers.DB.First(&tranLock, "company_id = ? and locked_type = ? and locked_type_key = ?", iCompany, lockedType, lockedTypeKey)

	recordNotFound := errors.Is(result.Error, gorm.ErrRecordNotFound)

	if recordNotFound {
		return errors.New("entity does not exist")
	}

	if result.Error != nil {
		return result.Error
	}

	if !tranLock.IsValid {
		return errors.New("entity does not exist")
	}

	if tranLock.IsLocked {
		return errors.New("entity is already locked")

	}

	if versionID != tranLock.VersionId {
		return errors.New("entity version mismatch")

	}

	tranLock.IsLocked = true
	tranLock.UpdatedID = iUserId
	tranLock.UpdatedAt = time.Now()

	//result = initializers.DB.Save(&tranLock)
	result = initializers.DB.Model(&tranLock).Updates(tranLock)

	if result.Error != nil {
		return result.Error
	}

	return nil

}

func CreateTheEntity(iCompany uint, lockedType types.LockedType, lockedTypeKey string) (string, error) {

	var tranLock models.TransactionLock
	result := initializers.DB.First(&tranLock, "company_id = ? and locked_type = ? and locked_type_key = ?", iCompany, lockedType, lockedTypeKey)

	recordNotFound := errors.Is(result.Error, gorm.ErrRecordNotFound)

	if !recordNotFound && result.Error != nil {
		return "", result.Error
	}

	if !recordNotFound {
		return "", errors.New("entity already exists")
	}

	tranLock.CompanyID = iCompany
	tranLock.LockedTypeKey = lockedTypeKey
	tranLock.LockedType = lockedType
	tranLock.IsLocked = false
	tranLock.IsValid = true
	tranLock.CreatedAt = time.Now()
	tranLock.VersionId = uuid.New().String()

	result = initializers.DB.Create(&tranLock)

	if result.Error != nil {
		return "", result.Error
	}

	return tranLock.VersionId, nil

}

func UnLockTheEntity(iCompany uint, lockedType types.LockedType, lockedTypeKey string, iUserId uint64, changeVersion bool) error {

	var tranLock models.TransactionLock
	result := initializers.DB.First(&tranLock, "company_id = ? and locked_type = ? and locked_type_key = ?", iCompany, lockedType, lockedTypeKey)
	recordNotFound := errors.Is(result.Error, gorm.ErrRecordNotFound)

	if recordNotFound {
		return errors.New("entity does not exist")
	}

	if result.Error != nil {
		return result.Error
	}

	if !tranLock.IsValid {
		return errors.New("entity does not exist")
	}

	if !tranLock.IsLocked {
		return errors.New("entity is not locked")

	}

	dataMap := make(map[string]interface{})

	dataMap["is_locked"] = false
	dataMap["updated_id"] = iUserId
	if changeVersion {
		dataMap["version_id"] = uuid.New().String()
	}

	result = initializers.DB.Model(&tranLock).Updates(dataMap)

	if result.Error != nil {
		return result.Error
	}

	return nil

}
