const { application } = require("express")
const Comment = require("./../models/Comment")


exports.readAll =  async (req, res) => {

    const allComments = await Comment.find()

    res.status(200).json({
		msg: "Todos los comentarios obtenidos exitosamente.",
		data: allComments
	})
}

exports.create = async (req, res) => {

    //1.Obtener los datos del formulario
    const {title, description} = req.body

    console.log(title)
    console.log(description)

    //2.Crear el comentario en base de datos 
    const newComment = await Comment.create({
        title, 
        description
    })

    //3.Retornar un mensaje de que el comentario fue creado exitosamente, asi como la informacion del mismo 
    res.status(200).json({
        msg: "se ha creado correctamente el comentario.",
        data: newComment
    })

}