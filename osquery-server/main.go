package main

import (
	"context"

	"github.com/dwarpaal/pk-218/controllers"
	"github.com/dwarpaal/pk-218/models"
	"github.com/dwarpaal/pk-218/router"
	"github.com/spf13/viper"
)

func main() {
	viper.AutomaticEnv()
	viper.SetDefault("SOCKET_PATH", "/var/osquery/osquery.em")
	viper.SetDefault("PORT", 8001)

	controller := controllers.NewControllersInstance(models.NewOsqueryClient(viper.GetString("SOCKET_PATH")))

	// e.GET("/", func(c echo.Context) error {
	// 	return c.String(http.StatusOK, "Hello, World!")
	// })
	// e.Logger.Fatal(e.Start(":1323"))

	s := router.Init(context.Background(), viper.GetInt("PORT"), controller)
	s.Run()
}
