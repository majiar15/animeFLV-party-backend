const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let salaSchema = new Schema({
    codigo: String
});



module.exports = mongoose.model('sala', salaSchema);