const mongoose = require("mongoose");

const uri = "mongodb+srv://tahir:1@cluster0.vpoczao.mongodb.net/";

const connection = () => {
    mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> console.log("MongoDb Bağlantısı başarılı"))
    .catch(err=> console.log(err))
}

module.exports = connection;