const express = require('express');
const DBconnection =require('./config/database');
const cors = require('cors');

//Se crea el servidor
const app = express();

DBconnection();
app.use(cors())

//habilitar datos JSON
app.use(express.json());


//Ruta
app.use('/api/tickets', require('./router/ticketroute'));
app.use('/api/estadisticas', require('./router/estadisticasroute'));
app.use('/api/contenidos', require('./router/contenidoroute'));
app.use('/api/entrenamientos', require('./router/entrenamientoroute'));
app.use('/api/usuarios', require('./router/usuarioroute'));

app.use((req, res, next) => {
    res.status(404).send("La ruta solicitada no existe.");
  });

app.listen(5001, () => {
    console.log('The server is runnig')
})