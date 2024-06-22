const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contenidoSchema = new Schema({
    tituloContenido: { type: String, required: true },
    descripcion: { type: String, required: true },
    tipoContenido: { type: String, required: true },
    fechaPublicacion: { type: Date, required: true },
});

module.exports = mongoose.model("contenidos", contenidoSchema);
