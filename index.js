//1.Importaciones
const express = require("express")
const app = express()
const cors = require("cors")
const connectDB = require("./config/db")
//gestion de variables de entorno
require("dotenv").config()

connectDB()
//2.Middlewares
app.use(cors())

app.use(express.json({ extended: true }))

//3.Ruteo
app.use("/api/comments", require("./routes/comments"))



//4.Servidor
app.listen(process.env.PORT, () =>{
    console.log("Servidor activo")
})