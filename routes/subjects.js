var express = require('express');
var router = express.Router();
ObjectID = require('mongodb').ObjectID;

/* GET Subjects/id */
router.get('/:id', function(req, res, next) {
    const {db} = req.app.locals;
    db.collection('subjects')
        .find({_id: new ObjectID(id)})
        .toArray((err,subjects) => res.json(subjects));
    res.render('index', { title: 'Express' });
});

/* GET Subjects> */
router.get('/', function(req, res, next) {
    const {db} = req.app.locals;
    db.collection('subjects')
        .find()
        .toArray((err,subjects) => res.json(subjects));
});

/* PUT Subjects/id */
router.put('/:id',(req,res)=>{
    const {db} = req.app.locals;
    const {id} = req.params;
    db.collection('subjects')
        .updateOne(
            { _id: new ObjectID(id) },
            {$set:req.body},
            (err, response) => res.json(response));
});

/* Post Subjects */
router.post('/',(req,res) => {
    const {db} = req.app.locals;
    db.collection('subjects')
        .insertOne(req.body,
            (err,subjects)=> res.json(response));
});

// Route pour supprimer une entrée
router.delete('/:id',(req,res)=>{
    const {db} = req.app.locals;
    const {id} = req.params;
    db.collection('subjects')
        .deleteOne(
            { _id: new ObjectID(id) },
        (err, response) => res.json(response));
});
module.exports = router;