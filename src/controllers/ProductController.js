const mongoose = require('mongoose');

//Importar Model Product
const Product =  mongoose.model('Product');


//Exportar
module.exports = {

    //READ
    async index(req, res){
        const { page = 1 } = req.query;
        const products = await Product.paginate({},{page, limit:10});
        return res.json(products);
    },

    //READ BY ID
    async show(req, res){
        const product = await Product.findById(req.params.id);
        return res.json(product);
        
    },

    //CREATE
    async store(req, res){
        const product = await Product.create(req.body);
        return res.json(product);
    },

    //UPDATE
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body,{ new : true })
        return res.json(product);
    },
    
    //DELETE
    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);
        return res.send()
    }
};

