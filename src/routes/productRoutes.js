/* 
RUTAS PARAMETRIZADAS / PARAMETROS DINAMICOS / PARAMETROS OPCIONALES
router.get('/:idProducto/comentarios/:idComentario?', (req,res) => {
    if(req.params.idComentario)
        res.send(`Bienvenidos los comentarios del producto ${req.params.idProducto}, y estás enfocado en el comentario ${req.params.idComentario}`)
    else 
    res.send(`Bienvenidos los comentarios del producto ${req.params.idProducto}.`)
}) 
*/

const express = require('express')
const router = express.Router()

const productController= require('../controllers/productController')

router.get('/', productController.list)

module.exports= router
