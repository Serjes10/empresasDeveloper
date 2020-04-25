var res = require('./utils');
const db = require("./conection");

class Helpers {


    async insertarData(schema) {
        try {

            db.initialize();
            let response = await schema.save();
            db.cerrarConexion();
            return res.succesufulSend(response);

        } catch (error) {
            db.cerrarConexion();
            return res.failedSend(error);

        }

    }

    async viewData(schema, filter) {
        try {

            db.initialize();
            let response = await schema.find().populate(filter).exec();
            db.cerrarConexion();
            return res.succesufulSend(response);

        } catch (error) {
            db.cerrarConexion();
            return res.failedSend(error);

        }
    }

    async updateData(schema, id, params) {
        try {

            db.initialize();
            let response = await schema.findByIdAndUpdate({ _id: id }, { $set: params }, { new: true, runValidators: true, useFindAndModify: false });
            db.cerrarConexion();
            return res.succesufulSend(response);

        } catch (error) {
            db.cerrarConexion();
            return res.failedSend(error);

        }
    }
}


module.exports = Helpers;