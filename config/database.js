const mongoose = require('mongoose')

const conn = async()=>{
    //mongoAtlas
    const atlas = await mongoose.connect('mongodb+srv://UserAdmin:Maria2311@fiaptecnico.fl3p2.mongodb.net/todo_list')
}

module.exports = conn
