const mongoose=require("mongoose")
const categorySchema=mongoose.Schema({
     categoryName:{
        type:String,
        required:true
     }
})
exports.category_Model=mongoose.model("category_Model",categorySchema)