const mongoose = require('mongoose')
const bcrypt =require('bcrypt')

const Menu =  new mongoose.Schema(
    {
        name:String,
        image:String,
        price:String,
        quantity:Number,
    }
)

const userdetails =  new mongoose.Schema(
    {
        user_id:String,
        name: String,
        email: String,
        password: String,
        role: String,
        items: [Menu],
    }
);

const userTable = mongoose.model('users',userdetails);
module.exports = userTable;