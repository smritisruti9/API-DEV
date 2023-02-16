const mongoose=require("mongoose");
const { category_Model } = require("./category");
const productSchema=new mongoose.Schema({
productName:{
    type:String
},
qtyPerUnit:{
    type:Number
},
unitPrice:{
    type:Number
},
unitInStock:{
    type:Number
},
discontinued:{
    type:Boolean
},
categoryId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:category_Model,
    required:true
}

})
module.exports=mongoose.model("product_Model",productSchema)
