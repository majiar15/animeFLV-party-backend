const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let salaSchema = new Schema({
    codigo: String,
    url: String,
    participantes: Number

});



module.exports = mongoose.model('sala', salaSchema);