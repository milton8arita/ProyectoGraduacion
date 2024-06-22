const Entrenamiento = require('../model/entrenamientomodel');

exports.createEntrenamiento = async (req, res) => {
    try {
        let entrenamiento;
        entrenamiento = new Entrenamiento(req.body);

        await entrenamiento.save();
        res.status(201).json(entrenamiento);
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.getEntrenamientos = async (req, res) => {
    try {
        let entrenamiento = await Entrenamiento.find();
        res.json(entrenamiento);
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.updateEntrenamiento = async (req, res) => {
    try {
        const { entrenamientoRequerido, causa, fecha, lugarTrabajo, nombreOperador, numeroTablero, numeroCarnet } = req.body;
        let entrenamiento = await Entrenamiento.findById(req.params.id);

        if (!entrenamiento) {
            return res.status(404).json({ msg: 'Entrenamiento not found, try with another Entrenamiento' });
        }

        entrenamiento.entrenamientoRequerido = entrenamientoRequerido;
        entrenamiento.causa = causa;
        entrenamiento.fecha = fecha;
        entrenamiento.lugarTrabajo = lugarTrabajo;
        entrenamiento.nombreOperador = nombreOperador;
        entrenamiento.numeroCarnet = numeroCarnet;
        entrenamiento.numeroTablero = numeroTablero;

        entrenamiento = await Entrenamiento.findOneAndUpdate({ _id: req.params.id }, entrenamiento, { new: true });
        res.json(entrenamiento);
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.getEntrenamiento = async (req, res) => {
    try {
        let entrenamiento = await Entrenamiento.findById(req.params.id);
        if (!entrenamiento) {
            return res.status(404).json({ msg: 'Entrenamiento not found, try with another Entrenamiento' });
        }
        res.json(entrenamiento);
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.deleteEntrenamiento = async (req, res) => {
    try {
        const entrenamiento = await Entrenamiento.findById(req.params.id);
        if (!entrenamiento) {
            return res.status(404).json({ msg: 'Entrenamiento not found, try with another Entrenamiento' });
        }
        await Entrenamiento.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Entrenamiento deleted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}
