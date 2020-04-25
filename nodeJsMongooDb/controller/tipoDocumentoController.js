'use strict'
// Cargamos los modelos para usarlos posteriormente
var TipoDocumento = require('../models/tipoDocumentoModels');
var { failedSend } = require('../config/utils');
var Helpers = require('../config/Helpers');


class TipoDocumentoController {
    constructor() {

    }

    async obtenerTipoDocumento() {
        try {
            let helpers = new Helpers();
            let filtrar = "populate('idTipoDocumento')";
            let response = await helpers.viewData(TipoDocumento, filtrar);

            return response;

        } catch (error) {
            return failedSend(error);
        }
    }

    async insertarTipoDocumento(parametros) {
        try {
            let helpers = new Helpers();

            let tipoDocumento = new TipoDocumento({
                nombre: parametros.nombre,
                descripcion: parametros.descripcion
            })

            let response = await helpers.insertarData(tipoDocumento);

            return response;

        } catch (error) {
            return failedSend(error);
        }
    }



}

module.exports = TipoDocumentoController;