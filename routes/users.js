var express = require('express');
var router = express.Router();
let ratio = 0.75;
let acc = 1000;
/* GET users listing. */
router.get('/', function(req, res, next) {
  acc *=ratio;
  res.send(`value is: ${acc}`);
});

module.exports = router;
