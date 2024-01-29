package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/kishoreFuturaInsTech/single_backend/controllers/basiccontrollers"
	"github.com/kishoreFuturaInsTech/single_backend/middleware"
)

func Basicroutes(route *gin.RouterGroup) {
	services := route.Group("/basicservices", middleware.RequiredAuth)
	{
		//permissions
		services.GET("/permissions", middleware.SearchPagination, basiccontrollers.GetAllPermission)
		services.GET("/permissiongetuserid/:userid", basiccontrollers.GetAllPermissionByUserID)
		services.GET("/permissiongetusergroupid/:usergroupid", basiccontrollers.GetAllPermissionByUserGroupID)
		services.POST("/permissioncreate", basiccontrollers.CreatePermission)
		services.DELETE("/permissiondelete/:id", basiccontrollers.DeletePermission)
		services.GET("/permissionget/:id", basiccontrollers.GetPermission)
		services.POST("/permissionclone/:id", basiccontrollers.ClonePermission)
		services.PUT("/permissionupdate", basiccontrollers.ModifyPermission)

		// company 
		services.GET("/companies", middleware.SearchPagination, basiccontrollers.GetAllCompanies)
		services.GET("/getcompany/:id", basiccontrollers.GetCompany)
		services.POST("/clonecompany/:id", basiccontrollers.CloneCompany1)
		services.DELETE("/deletecompany/:id", basiccontrollers.DeleteCompany)
		services.POST("/companycreate", basiccontrollers.CreateCompany)
		services.PUT("/companyupdate", basiccontrollers.ModifyCompany)

		//currencies
		services.GET("/currencies", middleware.SearchPagination, basiccontrollers.GetAllCurrencies)

		//company Status
		services.GET("/companystatus", middleware.SearchPagination, basiccontrollers.GetAllCompanyStatus)
		services.POST("/companystatuscreate", basiccontrollers.CreateCompanyStatus)
		services.DELETE("/companystatusdelete/:id", basiccontrollers.DeleteCompanyStatus)
		services.GET("/companystatusget/:id", basiccontrollers.GetCompanyStatus)
		services.POST("/companystatusclone/:id", basiccontrollers.CloneCompanyStatus)
		services.PUT("/companystatusupdate", basiccontrollers.ModifyCompanyStatus)

		//Transations
		services.GET("/transactions", middleware.SearchPagination, basiccontrollers.GetAllTransaction)
		services.POST("/transactioncreate", basiccontrollers.CreateTransaction)
		services.DELETE("/transactiondelete/:id", basiccontrollers.DeleteTransaction)
		services.GET("/transactionget/:id", basiccontrollers.GetTransaction)
		services.POST("/transactionclone/:id", basiccontrollers.CloneTransaction)
		services.PUT("/transactionupdate", basiccontrollers.ModifyTransaction)


	

		
	}

}
