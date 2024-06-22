const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const estadisticasSchema = new Schema({
    tipoEvento:{type: String, required: true},
    fechaCreacion:{type: Date, required: true}
});

module.exports = mongoose.model("estadisticas", estadisticasSchema);
