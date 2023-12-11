// const mongoose = require('mongoose');
// const productSchema = new mongoose.Schema({
//     "id": { type: String, required: 'Required: id' },
//     "url":  { type: String, required: 'Required: url' },
//     "detailUrl":  { type: String, required: 'Required: detailUrl' },
//     "title":{ type: Object, required: 'Required: title' },
//     "price": { type: Object, required: 'Required: price' },
//     "quantity":{ type: Number, required: 'Required: quantity' },
//     "description": { type: String, required: 'Required: description' },
//     "discount":{ type: String, required: 'Required: discount' },
//     "tagline":{ type: String, required: 'Required: tagline' }
//     // "name": { type: String, required: 'Required: name' },
//     // "alias": { type: String, required: 'Required: alias' },
// });

// module.exports = Product = mongoose.model('product', productSchema);

// // module.exports.Product=Product();


import mongoose from 'mongoose';
// import autoIncrement from 'mongoose-auto-increment';

const productSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true


    },
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});

// autoIncrement.initialize(mongoose.connection);
// productSchema.plugin(autoIncrement.plugin, 'product');

export const productsScehma = mongoose.model('product', productSchema);

// export default products;