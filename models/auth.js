const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let authSchema = new Schema({
    sala_id
});



module.exports = mongoose.model('auth', authSchema);