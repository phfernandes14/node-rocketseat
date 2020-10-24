const express = require('express');

const mongoose = require('mongoose');

const requireDir = require('require-dir');

const cors = require('cors');

//Iniciando app
const app = express();

//Define json como retorno da API
app.use(express.json());

app.use(cors());

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi',{
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>{
    console.log('Conectado com MongoDB!')
}).catch((error)=>{
    console.log(`Ocorreu um erro ao conectar com o MongoDB: ${error}`)
})

//Importa Models
requireDir("./src/models/");

//Rotas
app.use('/api', require('./src/routes'))

app.listen(3001)