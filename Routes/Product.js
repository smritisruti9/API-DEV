const router=require("express").Router();
const{product_Model}=require('../model/product')
const {category_Model}=require('../model/category')
const productcontroller=require('../controller/productcontroller');

//read all record from product table
router.get("/",productcontroller.allproduct)

//create product and category
router.post(`/`,async(req,res)=>{
    const categoryId=await category_Model.findById(req.body.categoryId);
    const product=new product_Model({
        productName:req.body.productName,
        qtyPerUnit:req.body.qtyPerUnit,
        unitPrice:req.body.unitPrice,
        UnitInStock:req.body.UnitInStock,
        discontinued:req.body.discontinued,
        categoryId:req.body.categoryId
    })
});

//update record from product table
router.put('/:categoryId',async(req,res)=>{
    const product_Model=await product_Model.findByAndUpdate(
        req.params.categoryId,
        {
        productName:req.body.productName,
        qtyPerUnit:req.body.qtyPerUnit,
        unitPrice:req.body.unitPrice,
        UnitInStock:req.body.UnitInStock,
        discontinued:req.body.discontinued
        }
    )
})

//delete record from product table
router.delete('/:categoryId',(req,res)=>{
    product_Model.findByIdAndRemove(req.params.categoryId).then
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