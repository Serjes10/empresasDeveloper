'use strict'
// Cargamos los modelos para usarlos posteriormente
var Empresa = require('../models/empresaModels');
var res = require('../config/utils');
var Helpers = require('../config/Helpers');
// const _ = require('underscore');

class EmpresaController {

    constructor() {

    }

    async obtenerEmpresa() {
        try {
            let helpers = new Helpers();
            // Arreglo de elementos que son referencia en la colección, en el caso que no existan mandar arreglo vacio
            let filter = [{ path: "idTipoDocumento", model: 'TipoDocumento' }]
            let respuesta = await helpers.viewData(Empresa, filter);

            return respuesta;
        } catch (error) {
            return res.failedSend(error);
        }

    }

    async insertarEmpresas(parametros) {
        try {
            let helpers = new Helpers();
            console.log(parametros);
            let empresa = new Empresa({
                nombre: parametros.nombre,
                correo: parametros.correo,
                direccionUrl: parametros.direccion,
                documento: parametros.documento,
                idTipoDocumento: parametros.idTipoDocumento,
                redesSociales: parametros.redesSociales
            });
            let respuesta = await helpers.insertarData(empresa);

            return respuesta;

        } catch (error) {

            return res.failedSend(error);
        }
    }

    async actualizarEmpresa(params) {
        try {
            let helpers = new Helpers();
            var id = params.id;

            let empresaArray = {
                nombre: params.nombre,
                correo: params.correo,
                direccionUrl: params.direccionUrl,
                documento: params.documento,
                tipoDocumento: params.tipoDocumento,
            };

            let respuesta = await helpers.updateData(Empresa, id, empresaArray);

            return respuesta;

        } catch (error) {

            return res.failedSend(error);

        }
    }

}

module.exports = EmpresaController;