const mongoose = require('mongoose');
const { Schema } = mongoose;

const LayoutSchema = new Schema({
    user:{
       type: mongoose.Schema.Types.ObjectId,
       ref: "user"
    },
    productName:{
        type: String,
        required: true
    },
    sku:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true, 
    },
    size:{
        type: String,
        required: true, 
    },
    color:{
        type: String,
        required: true, 
    },
    sDiscription:{
        type: String,
        required: true, 
    },
    lDescription:{
        type: String,
        required: true, 
    },
    phone:{
        type: String,
        required: true, 
    },
    file:{
        contentType: String,
        data: Buffer, 
    }
  });

  module.exports = mongoose.model('layouts', LayoutSchema);