const product=require("../model/product")
const allproduct=async(req,res)=>{
    try{
       const product_Model=await product.find();
       res.json(product_Model);
    }
    catch(error){
        res.json({message:error});
    }
};
module.exports={allproduct}