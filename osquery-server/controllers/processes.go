package controllers

import (
	"context"
	"log"
	"net/http"
)

func (c *Controllers) GetProcesses(res http.ResponseWriter, req *http.Request) {
	client := c.o.O.Client
	data, err := client.Query(context.Background(), "SELECT * FROM processes LIMIT 5")
	if err != nil {
		log.Fatal(err)
		http.Error(res, "unable to fetch processes data", http.StatusInternalServerError)
		res.WriteHeader(http.StatusInternalServerError)
	}
	res.WriteHeader(http.StatusOK)
	res.Write([]byte(data.String()))
}
