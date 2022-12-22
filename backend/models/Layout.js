const mongoose = require('mongoose');
const { Schema } = mongoose;

const LayoutSchema = new Schema({
    user:{
       type: mongoose.Schema.Types.ObjectId,
       ref: "user"
    },
    fname:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true, 
    },
    phone:{
        type: String,
        default: "General"
    }
  });

  module.exports = mongoose.model('layouts', LayoutSchema);