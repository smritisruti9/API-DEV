const category=require("../model/category")
const allcategory=async(req,res)=>{
    try{
       const category_Model=await product.find();
       res.json(category_Model);
    }
    catch(error){
        res.json({message:error});
    }
};
module.exports={allcategory}