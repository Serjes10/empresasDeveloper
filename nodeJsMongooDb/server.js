require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


var empresaRoutes = require('./routes/empresaRouter');
var tipoDocumentoRoutes = require('./routes/tipoDocumentoRouter');
app.use('/api/dev', empresaRoutes, tipoDocumentoRoutes);

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});