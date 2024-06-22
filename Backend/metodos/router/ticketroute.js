const express = require('express');
const router = express.Router();

const ticketscontroller = require('../controllers/ticketcontroller')

router.get('/', ticketscontroller.getTickets);

router.post('/', ticketscontroller.createTicket);
router.put('/:id', ticketscontroller.updateTicket);
router.get('/:id', ticketscontroller.getTicket);
router.delete('/:id', ticketscontroller.deleteTicket);


module.exports = router;
