const {Schema , model} = require("mongoose")
const mongoose = require("mongoose")

const HomeSchema = new Schema({
    image:{type:String},
    name:{type:String},
    description:{type:String},
    search:{type:String}
    
}
,{timestamps:true}
)

const HomeModel = mongoose.model("Home", HomeSchema, 'home')
module.exports = HomeModel