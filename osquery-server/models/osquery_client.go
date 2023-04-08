package models

import (
	"log"
	"time"

	"github.com/osquery/osquery-go"
)

type OsqueryClient struct {
	O *osquery.ExtensionManagerClient
}

func NewOsqueryClient(socket string) *OsqueryClient {
	o, err := osquery.NewClient(socket, 5*time.Second)
	if err != nil {
		log.Fatal(err)
	}
	return &OsqueryClient{
		O: o,
	}
}
