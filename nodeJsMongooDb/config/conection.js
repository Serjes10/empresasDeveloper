var mongoose = require('mongoose');

const dbConnectionUrl = "mongodb+srv://serjes:serjes2907@cluster0-kmgbe.mongodb.net/Asda?retryWrites=true&w=majority";


async function initialize() {
    try {

        await mongoose.connect(dbConnectionUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
            ssl: true,
            retryWrites: true
        });

    } catch (error) {
        handleError(error);
    }

}

function cerrarConexion() {
    mongoose.connection.close();
}

module.exports = {
    initialize,
    cerrarConexion
};