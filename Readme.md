# Projet QCM api et reactnative

## Installation

npx express-generator --no-view my-app-api 
npm install dotenv 
npm install --save-dev nodemon 
npm install mongodb

dans app.js
require ('dotenv').config();

npm install mongodb

## Configuration
crer un fichier .env avec ces infos
PORT=8000
DB_HOST=localhost
DB_PORT=27017
DB_NAME=qcm

dans www -> var MongoCLient = require('mongodb').MongoClient;

Apres la fonction  var server = http.createServer(app);

MongoCLient.connect('mongodb://'+process.env.DB_HOST+':'+process.env.DB_PORT,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})
    .then(client => {
      app.locals.db = client.db(process.env.DB_NAME);
    })
    .catch(err=>console.log(err))
    
Pour appeler l'api : http://localhost:8000/subjects