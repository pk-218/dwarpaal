package router

import (
	"context"
	"fmt"
	"net/http"

	"github.com/dwarpaal/pk-218/models"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

type Server struct {
	e echo.Echo
	p int
	c models.ControllerInterface
}

func Init(ctx context.Context, port int, controller models.ControllerInterface) *Server {
	s := &Server{
		e: *echo.New(),
		p: port,
		c: controller,
	}

	s.e.Use(middleware.Logger())
	s.setRouter(ctx)

	return s
}

func (s *Server) Run() {
	addr := fmt.Sprintf(":%d", s.p)
	s.e.Start(addr)
}

func (s *Server) setRouter(ctx context.Context) {
	s.e.GET("/processes", echo.WrapHandler(http.HandlerFunc(s.c.GetProcesses)))
}
