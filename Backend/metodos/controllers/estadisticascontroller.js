const Estadisticas = require('../model/estadisticasmodel');

exports.createEstadisticas = async (req, res) => {

    try {
        let estadisticas;
        //Create Ticket
        estadisticas = new Estadisticas(req.body);

        await estadisticas.save();
        res.send(estadisticas);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}


exports.getEstadisticas = async(req, res) =>{
    try {
        const estadisticas = await Estadisticas.find();
        res.json(estadisticas); //recibiendo en formato json
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server')
    }
}


exports.updateEstadisticas = async (req, res) =>{
    try {

        const { tipoEvento, fechaCreacion} = req.body;
        let estadisticas = await Estadisticas.findById(req.params.id);

        if(!estadisticas){
             res.status(404).json({msg:'estadisticas not found, try with other estadisticas'})
        }
        estadisticas.tipoEvento = tipoEvento;
        estadisticas.fechaCreacion = fechaCreacion;
       

        estadisticas = await Estadisticas.findOneAndUpdate({_id : req.params.id}, estadisticas, {new:true})
        res.json(estadisticas);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}


exports.getEstadistica = async (req, res) => {

    try {
        let estadisticas = await Estadisticas.findById(req.params.id);
        if(!estadisticas){
             res.status(404).json({msg:'estadisticas not found, try with other estadisticas'})
        }
        res.json(estadisticas);
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}