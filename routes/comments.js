// 1.Importaciones
const express = require("express")
const router = express.Router()
const commentsController = require("./../controllers/commentsController")

//2. Rutas
router.get("/readall", commentsController.readAll)

//servicio que permita crear un comentario 
router.post("/create", commentsController.create)




//3.Exportacion
module.exports = router