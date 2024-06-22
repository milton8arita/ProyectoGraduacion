const Ticket = require('../model/ticketmodel');

exports.createTicket = async (req, res) => {

    try {
        let ticket;
        //Create Ticket
        ticket = new Ticket(req.body);

        await ticket.save();
        res.send(ticket);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}


exports.getTickets = async(req, res) =>{
    try {
        const ticket = await Ticket.find();
        res.json(ticket); //recibiendo en formato json
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server')
    }
}


exports.updateTicket = async (req, res) =>{
    try {

        const { asunto, descripcion, fecha, estadoTicket,nombreOperador, numeroArnes,numeroCartet,supervisor} = req.body;
        let ticket = await Ticket.findById(req.params.id);

        if(!ticket){
             res.status(404).json({msg:'Ticket not found, try with other Ticket'})
        }
        ticket.asunto = asunto;
        ticket.descripcion = descripcion;
        ticket.fecha = fecha;
        ticket.estadoTicket = estadoTicket;
        ticket.nombreOperador = nombreOperador;
        ticket.numeroArnes = numeroArnes;
        ticket.numeroCarnet = numeroCartet;
        ticket.supervisor = supervisor;

        ticket = await Ticket.findOneAndUpdate({_id : req.params.id}, ticket, {new:true})
        res.json(ticket);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}


exports.getTicket = async (req, res) => {

    try {
        let ticket = await Ticket.findById(req.params.id);
        if(!ticket){
             res.status(404).json({msg:'Ticket not found, try with other Ticket'})
        }
        res.json(ticket);
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.deleteTicket = async (req, res) => {
    try {

        let ticket = await Ticket.findById(req.params.id);

        if(!ticket){
            res.status(404).json({msg:'ticket not found, try with other ticket'})
        }

        await Ticket.findOneAndRemove({_id: req.params.id})
        res.json({msg:"ticket deleted successfully"})
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
} 