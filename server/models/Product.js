const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    writer: {
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    title: {
        type:String,
    },
    description: {
        type: String,
    },
    price: {
        type:Number,
        default:0
    },
    images: {
        type:Array,
        default:[],
    },
    sold: {
        type:Number,
        maxlength:1000,
        default:0
    },
    views: {
        type:Number,
        default:0
    }      
},{timestamp: true})

const Product = mongoose.model('Product',productSchema);

module.exports = {Product}