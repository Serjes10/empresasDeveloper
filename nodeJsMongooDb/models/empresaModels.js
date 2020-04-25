'use strict'
// Cargamos el módulo de mongoose
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
// Usaremos los esquemas
var Schema = mongoose.Schema;
// Creamos el objeto del esquema y sus atributos
var empresaSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    correo: { type: String, unique: true, required: [true, 'El correo es necesario'] },
    direccionUrl: String,
    documento: { type: String, required: [true, 'El documento es necesario'] },
    idTipoDocumento: { type: Schema.Types.ObjectId, ref: "TipoDocumento" },
    redesSociales: [{
        nombre: { type: String, required: [true, 'El campo nombre de las redes sociales es obligatorio'] },
        url: { type: String },
        estado: { type: Boolean, default: true }
    }]
});

//Verifica las unique key
empresaSchema.plugin(uniqueValidator);

empresaSchema.methods.toJSON = function() {

    let empresa = this;
    let empresaObject = empresa.toObject();


    return empresaObject;
}

// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Empresa', empresaSchema);