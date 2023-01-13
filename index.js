import express  from 'express';
import  router  from './src/routes/check.route.js';

const app = express();
app.use(express.json());

app.use('/', router);

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log( `Servidor funcionando en el puerto ${PORT}` )
})