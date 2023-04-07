package models

import "net/http"

type ControllerInterface interface {
	GetProcesses(res http.ResponseWriter, req *http.Request)
}
