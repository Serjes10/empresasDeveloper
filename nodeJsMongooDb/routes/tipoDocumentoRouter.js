'use strict'

// Cargamos el módulo de express para poder crear rutas
var api = require('express').Router();
var TipoDocumento = require('../controller/tipoDocumentoController');

api.get('/tipoDocumento', (req, res) => {
    let params = req.body;
    var tipoDocumento = new TipoDocumento();

    tipoDocumento.obtenerTipoDocumento().then(async(result) => {
        let respuesta = await result;
        if (!respuesta.hasError) {
            res.status(200).json(result);
        } else {
            res.status(400).json(result);
        }
    });
});

api.post('/tipoDocumento', (req, res) => {
    let params = req.body;

    let tipoDocumento = new TipoDocumento();
    tipoDocumento.insertarTipoDocumento(params).then(async(result) => {
        let respuesta = await result;
        if (!respuesta.hasError) {
            res.status(200).json(result);
        } else {
            res.status(400).json(result);
        }
    });
});

module.exports = api;