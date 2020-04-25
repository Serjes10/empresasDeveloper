'use strict'

// Cargamos el módulo de express para poder crear rutas
var api = require('express').Router();

// Cargamos el controlador
var Empresa = require('../controller/empresaController');
// var EmpresaModel = require('../models/empresaModels');

const db = require("../config/conection");


api.get('/obtenerEmpresa', (req, res) => {
    var params = req.body;
    var empresaController = new Empresa();
    empresaController.obtenerEmpresa().then(async(result) => {
        let respuesta = await result;
        if (!respuesta.hasError) {
            res.status(200).json(result);
        } else {
            res.status(400).json(result);
        }
    });

})

// Creamos una ruta de tipo POST para el método de pruebas
api.post('/empresa', async(req, res) => {
    try {
        var params = req.body;
        var empresaController = new Empresa();

        empresaController.insertarEmpresas(params).then(async(result) => {
            let respuesta = await result;
            if (!respuesta.hasError) {
                res.status(200).json(result);
            } else {
                res.status(400).json(result);
            }
        });
    } catch (err) {
        return err
    }
});

api.put('/empresaActualizar', function(req, res) {
    try {

        // let id = req.body.id;
        let params = req.body;
        var empresaController = new Empresa();
        empresaController.actualizarEmpresa(params).then(async(result) => {
            let respuesta = await result;
            if (!respuesta.hasError) {
                res.status(200).json(result);
            } else {
                res.status(400).json(result);

            }
        });

    } catch (error) {
        return error;
    }



});

// Exportamos la configuración
module.exports = api;