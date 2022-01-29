//1.Importaciones
const mongoose = require("mongoose")

//2.Schema
const commentSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required:true
    }
})

//3.Modelo
const Comment = mongoose.model("Comment", commentSchema)

//4.Exportacion 
module.exports = Comment
