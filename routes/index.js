var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var seed = Math.floor(Math.random()*89998) + parseInt(10000);
  res.redirect('/' + seed);
});

router.get('/:seed', function(req, res, next) {
  res.render('index', {
    title: 'Startup generator',
    seed: req.params.seed
  });
});


module.exports = router;
