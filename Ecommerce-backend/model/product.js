const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    productName:String,
    productImage:String,
    productPrice:Number,
    productDescription:String
},
{
    timestamps:true
}
);
const ProductModel = mongoose.model("E_Product",Product);
module.exports ={
    ProductModel,
    create: async(data) =>{
        try{
            let product = await ProductModel.create({
                productName:data.productName,
                productImage:data.productImage,
                productPrice:data.productPrice,
                productDescription:data.productDescription
            })
            return product;
        }catch(error) {
            console.log("==============Product creating error===============",error);
        }
    }
}