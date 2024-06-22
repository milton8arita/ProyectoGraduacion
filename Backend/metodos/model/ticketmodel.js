const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    asunto: {type: String, required: true},
    descripcion: {type: String, required: true},
    fecha: {type: Date, required: true},
    estadoTicket: {type: String, required: true},
    nombreOperador: {type: String, required: true},
    numeroArnes: {type: Number, required: true},
    numeroCarnet: {type: Number, required: true},
    supervisor: {type: String, required: true},
});

module.exports = mongoose.model("tickets", ticketSchema);
