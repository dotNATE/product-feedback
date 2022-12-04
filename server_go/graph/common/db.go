package common

import (
	"log"

	"github.com/dotNate/product_feedback_server/graph/customTypes"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func InitDb() (*gorm.DB, error) {
	dsn := "root:password@tcp(127.0.0.1:3306)/product_feedback?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Error connecting to database: %s", err.Error())
	}
	db.AutoMigrate(&customTypes.User{})

	return db, nil
}
