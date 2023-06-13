const mongoose = require("mongoose");

const personelShema = new mongoose.Schema({
    name: String,
    logo: String,
    aboutMe: String
});

const Personel = mongoose.model("Personel", personelShema); //tablo == collection => noSQL yapılarında

module.exports = Personel;