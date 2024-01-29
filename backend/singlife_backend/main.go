package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"

	"github.com/kishoreFuturaInsTech/single_backend/initializers"
	"github.com/kishoreFuturaInsTech/single_backend/routes"
)

func init() {
	initializers.LoadEnvVariables()
	//initializers.CheckLicense()
	initializers.ConnectToDb("root", "root")
	initializers.SyncDatabase()
}

func main() {
	r := gin.Default()
	//config := cors.DefaultConfig()
	config := cors.DefaultConfig()
	// config.AllowOrigins = []string{"*"}
	config.AllowOrigins = []string{"http://localhost:5173"}
	config.AllowCredentials = true
	r.Use(cors.New(config))

	v1 := r.Group("/api/v1")

	{

		routes.Authroutes(v1)
		routes.Basicroutes(v1)
		
		// services := v1.Group("/services", middleware.RequiredAuth)
		// {
		// 	services.POST("/contract", middleware.RequiredAuth, controllers.CreateContract)
		// 	services.PUT("/contract", middleware.RequiredAuth, controllers.ModifyContract)
		// 	services.GET("/contract/:contractId", middleware.RequiredAuth, controllers.EnquireContract)
		// 	services.DELETE("/contract/:contractId", middleware.RequiredAuth, controllers.DeleteContract)
		// }
	}
	


	r.Run()
}
