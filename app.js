const express = require ('express')
const app = express();

const mainRoutes= require('./src/routes/mainRoutes')
const productRoutes= require('./src/routes/productRoutes')
const userRoutes= require('./src/routes/userRoutes')

app.use(express.static('./public'))

app.set('view engine', 'ejs')

app.use('/' , mainRoutes);
app.use('/products' , productRoutes);
app.use('/user' , userRoutes);

app.listen(process.env.PORT || 3000, () => console.log("Servidor corriendo en el puerto 3000"))





