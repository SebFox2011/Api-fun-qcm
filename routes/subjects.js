var express = require('express');
var router = express.Router();
/* GET Subjects> */
router.get('/', function(req, res, next) {
    const {db} = req.app.locals;
    db.collection('subjects').find().toArray(
        (err,subjects) => res.json(subjects));
});

/* GET Subjects/id */
router.get('/:id', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/* PUT Subjects/id */

module.exports = router;