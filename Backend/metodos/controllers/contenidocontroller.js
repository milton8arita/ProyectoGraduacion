const Contenido = require('../model/contenidomodel');

exports.createContenido = async (req, res) => {

    try {
        let contenido;
        //Create Contenido
        contenido = new Contenido(req.body);

        await contenido.save();
        res.send(contenido);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}


exports.getContenidos = async(req, res) =>{
    try {
        const contenido = await Contenido.find();
        res.json(contenido); //recibiendo en formato json
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server')
    }
}


exports.updateContenido = async (req, res) =>{
    try {

        const { tituloContenido, descripcion, tipoContenido,fechaPublicacion} = req.body;
        let contenido = await Contenido.findById(req.params.id);

        if(!contenido){
             res.status(404).json({msg:'contenido not found, try with other contenido'})
        }
        contenido.tituloContenido = tituloContenido;
        contenido.descripcion = descripcion;
        contenido.tipoContenido = tipoContenido;
        //contenido.imagenContenido = imagenContenido;
        contenido.fechaPublicacion = fechaPublicacion;
    

        contenido = await Contenido.findOneAndUpdate({_id : req.params.id}, contenido, {new:true})
        res.json(contenido);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}


exports.getContenido = async (req, res) => {

    try {
        let contenido = await Contenido.findById(req.params.id);
        if(!contenido){
             res.status(404).json({msg:'contenido not found, try with other Contenido'})
        }
        res.json(contenido);
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.deleteContenido = async (req, res) => {
    try {

        let contenido = await Contenido.findById(req.params.id);

        if(!contenido){
            res.status(404).json({msg:'Contenido not found, try with other Contenido'})
        }

        await Contenido.findOneAndRemove({_id: req.params.id})
        res.json({msg:"contenido deleted successfully"})
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}
