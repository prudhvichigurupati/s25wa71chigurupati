var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    let value1 = (Math.random() * 20) - 10; // Generate a number between -10 and 10
    let absValue = Math.abs(value1); // Get absolute value

    res.send(`The absolute value of ${value1} is ${absValue}`);
});

module.exports = router;
