const router=require("express").Router();
const {category_Model}=require("../model/category")
const categorycontroller=require('../controller/categorycontroller');

router.get("/",categorycontroller.allcategory)
router.get("/:categoryId");
router.post('/',async(req,res)=>{
    const category=new category_Model({
        categoryName:req.body.categoryName
    })
    category=await category.save();
    res.send(category)
})
//delete record 
router.delete('/:categoryId',(req,res)=>{
    category_Model.findByIdAndRemove(req.params.categoryId).then
    (category){
        if (category){
            return res.status(200).json({success:true,messsage:"succesfully removed"})
        }
        else{
            return res.status(404)
        }
    }
})
module.exports=router