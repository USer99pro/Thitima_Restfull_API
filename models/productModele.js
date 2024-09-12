const mongoose = require('mongoose');
const {Schema} = mongoose

const productSchema = new Schema ({
   name:{type: String,required: true ,trim: true},
    price:{type: String,required: true ,trim: true},
});

const product = mongoose.model("products", productSchema);
module.exports = product