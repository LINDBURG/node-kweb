// var express = require('express');
// var router = express.Router();
//
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'power' });
// });
//
// module.exports = router;

module.exports = function(app) {
  app.use('/', require('./routes/about'));
  app.use('/music/', require('./routes/music'));
  app.use('/cl/', require('./routes/cl'));
  app.use('/club/', require('./routes/club'));

};