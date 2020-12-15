const mongoose = require('mongoose')

const birthday = new mongoose.Schema({
    fullname: String,
    birthday: {
        type:Date
    },
    phone:String
})

module.exports = mongoose.model('BIRTHDAY' , birthday)