const path= require('path')

module.exports= {
    index: (req, res) => {
        // return res.send("Hola")
        return res.render('index')
    }
}