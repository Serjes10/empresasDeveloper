function succesufulSend(data) {
    let respuesta = {
        data: data,
        errors: [],
        message: '',
        hasError: false
    }

    return respuesta;
}

function failedSend(data) {
    let respuesta = {
        data: [],
        errors: data.errors,
        message: data.message,
        hasError: true
    }

    return respuesta;
}

module.exports = {
    succesufulSend,
    failedSend
};