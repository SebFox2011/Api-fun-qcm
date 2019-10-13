var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

/* GET /subjects/ */
router.get('/', function(req, res, next) {
  const { db } = req.app.locals;
  db.collection('subjects').aggregate([
    {
      $project: {
        _id: 1,
        title: 1,
        questions: { $cond: { if: { $isArray: "$questions" }, then: { $size: "$questions" }, else: 0} }
      }
    }
  ]).toArray((err, subjects) => res.json(subjects));
});

/* GET /subjects/:id */
router.get('/:id', (req, res) => {
  const { db } = req.app.locals;
  const { id } = req.params;
  db.collection('subjects').findOne({ _id: new ObjectID(id) }, (err, question) => res.json(question));
});

/* PUT /subjects/:id */
router.put('/:id', (req, res) => {
  const { db } = req.app.locals;
  const { id } = req.params;
  db.collection('subjects').updateOne({ _id: new ObjectID(id) }, { $push: { questions: req.body } }, (err, question) => res.json(question));
});

module.exports = router;
