const mongoose = require('mongoose');
const db = 'mongodb+srv://helal72:26271212@cluster0.xfbjfbt.mongodb.net/Assessment?retryWrites=true&w=majority'
const connectToMongo = async()=>{
    try{
        await mongoose.connect(db);
        console.log("db is connected");
    }
    catch(error){
        console.log("db is not connected");
        console.log(error.message);
    }
};

module.exports = connectToMongo;