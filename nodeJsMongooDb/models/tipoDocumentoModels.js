'use strict'
// Cargamos el módulo de mongoose
var mongoose = require('mongoose');

// Usaremos los esquemas
var Schema = mongoose.Schema;

var tipoDocumentoSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre del tipo de documento es necesario'] },
    descripcion: { type: String },
    estado: { type: Boolean, default: true }
});

module.exports = mongoose.model('TipoDocumento', tipoDocumentoSchema);