const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/contactus', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'contact.html'));
});
router.post('/success', (req, res, next) => {
  res.send(`<h1>Form successfuly filled</h1>`);
});


module.exports = router;
