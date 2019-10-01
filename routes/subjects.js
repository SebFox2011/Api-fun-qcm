var express = require('express');
var router = express.Router();
/* GET Subjects> */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/* GET Subjects/id */
router.get('/:id', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/* PUT Subjects/id */

module.exports = router;