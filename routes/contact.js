const express = require('express');

const router = express.Router();

const contactController=require('../controllers/contactus')

router.get('/contactus',contactController.contact);
router.post('/success', contactController.success);


module.exports = router;
