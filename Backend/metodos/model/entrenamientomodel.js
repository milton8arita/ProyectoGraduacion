const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entrenamientosSchema = new Schema({
    entrenamientoRequerido: {type: String, required: true},
    causa: {type: String, required: true},
    fecha: {type: Date, required: true},
    lugarTrabajo: {type: String, required: true},
    nombreOperador: {type: String, required: true},
    numeroCarnet: {type: Number, required: true},
    numeroTablero: {type: Number, required: true},

});

module.exports = mongoose.model("entrenamientos", entrenamientosSchema);
