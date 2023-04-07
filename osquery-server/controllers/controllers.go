package controllers

import (
	"github.com/dwarpaal/pk-218/models"
)

type Controllers struct {
	o *models.OsqueryClient
}

func NewControllersInstance(o *models.OsqueryClient) models.ControllerInterface {
	c := &Controllers{
		o: o,
	}
	return c
}
