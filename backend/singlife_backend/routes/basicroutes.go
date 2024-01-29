package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/kishoreFuturaInsTech/single_backend/basiccontrollers"
	"github.com/kishoreFuturaInsTech/single_backend/middleware"
)

func Basicroutes(route *gin.RouterGroup) {
	services := route.Group("/basicservices", middleware.RequiredAuth)
	{
	

		//user groups - Completed
		services.GET("/usergroups", middleware.SearchPagination, basiccontrollers.GetAllUserGroup)
		services.POST("/usergroupcreate", basiccontrollers.CreateUserGroup)
		services.DELETE("/usergroupdelete/:id", basiccontrollers.DeleteUserGroup)
		services.GET("/usergroupget/:id", basiccontrollers.GetUserGroup)
		services.POST("/usergroupclone/:id", basiccontrollers.CloneUserGroup)
		services.PUT("/usergroupupdate", basiccontrollers.ModifyUserGroup)

		services.GET("/permissions", middleware.SearchPagination, basiccontrollers.GetAllPermission)
		services.GET("/permissiongetuserid/:userid", basiccontrollers.GetAllPermissionByUserID)
		services.GET("/permissiongetusergroupid/:usergroupid", basiccontrollers.GetAllPermissionByUserGroupID)
		services.POST("/permissioncreate", basiccontrollers.CreatePermission)
		services.DELETE("/permissiondelete/:id", basiccontrollers.DeletePermission)
		services.GET("/permissionget/:id", basiccontrollers.GetPermission)
		services.POST("/permissionclone/:id", basiccontrollers.ClonePermission)
		services.PUT("/permissionupdate", basiccontrollers.ModifyPermission)

		// comapny - Completed
		services.GET("/companies", middleware.SearchPagination, basiccontrollers.GetAllCompanies)
		services.GET("/getcompany/:id", basiccontrollers.GetCompany)
		services.POST("/clonecompany/:id", basiccontrollers.CloneCompany1)
		services.DELETE("/deletecompany/:id", basiccontrollers.DeleteCompany)
		services.POST("/companycreate", basiccontrollers.CreateCompany)
		services.PUT("/companyupdate", basiccontrollers.ModifyCompany)

		services.GET("/currencies", middleware.SearchPagination, basiccontrollers.GetAllCurrencies)

		services.GET("/companystatus", middleware.SearchPagination, basiccontrollers.GetAllCompanyStatus)
		services.POST("/companystatuscreate", basiccontrollers.CreateCompanyStatus)
		services.DELETE("/companystatusdelete/:id", basiccontrollers.DeleteCompanyStatus)
		services.GET("/companystatusget/:id", basiccontrollers.GetCompanyStatus)
		services.POST("/companystatusclone/:id", basiccontrollers.CloneCompanyStatus)
		services.PUT("/companystatusupdate", basiccontrollers.ModifyCompanyStatus)

		services.GET("/errors", middleware.SearchPagination, basiccontrollers.GetAllError)
		services.POST("/errorcreate", basiccontrollers.CreateError)
		services.DELETE("/errordelete/:id", basiccontrollers.DeleteError)
		services.GET("/errorget/:id", basiccontrollers.GetError)
		services.POST("/errorclone/:id", basiccontrollers.CloneError)
		services.PUT("/errorupdate", basiccontrollers.ModifyError)

		services.GET("/languages", basiccontrollers.GetAllLanguage)
		services.POST("/languagecreate", basiccontrollers.CreateLanguage)
		services.DELETE("/languagedelete/:id", basiccontrollers.DeleteLanguage)
		services.GET("/languageget/:id", basiccontrollers.GetLanguage)
		services.POST("/languageclone/:id", basiccontrollers.CloneLanguage)
		services.PUT("/languageupdate", basiccontrollers.ModifyLanguage)


		
		services.GET("/transactions", middleware.SearchPagination, basiccontrollers.GetAllTransaction)
		services.POST("/transactioncreate", basiccontrollers.CreateTransaction)
		services.DELETE("/transactiondelete/:id", basiccontrollers.DeleteTransaction)
		services.GET("/transactionget/:id", basiccontrollers.GetTransaction)
		services.POST("/transactionclone/:id", basiccontrollers.CloneTransaction)
		services.PUT("/transactionupdate", basiccontrollers.ModifyTransaction)

		

		


		// Business Date
		services.GET("/allbusinessdates", middleware.SearchPagination, basiccontrollers.GetAllBusinessDate)
		services.POST("/businessdatecreate", middleware.RequiredAuth, basiccontrollers.CreateBusinessDate)
		services.DELETE("/businessdatedelete/:id", middleware.RequiredAuth, basiccontrollers.DeleteBusinessDate)
		services.GET("/businessdateget/:id", middleware.RequiredAuth, basiccontrollers.GetBusinessDate)
		services.POST("/businessdateclone/:id", middleware.RequiredAuth, basiccontrollers.CloneBusinessDate)
		services.PUT("/businessdateupdate", middleware.RequiredAuth, basiccontrollers.ModifyBusinessDate)
		services.GET("/compbusinessdateget/:coid/:deptcode/:usercode", basiccontrollers.GetCompanyBusinessDate)

		
	}

}
