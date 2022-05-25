const ProductModel = require('../model/product');

exports.postProduct = async(req,res,next) => {
    try{
        const file = req.file;
        let data = req.body;
        data.productImage = file.filename? file.filename : '';
        let product = await ProductModel.create(data);
        if(product) {
            return res.status(200).json({
                message:"Congratulation Product Post Successfully......",
                hasError:false,
                result:product
            })
        }else {
            return res.status(400).json({
                message:"Sorry Product Not Post........!",
                hasError:true,
                result:{}
            })
        }
    }catch(error) {
        console.log("================Product Controller Error=================",error);
        next();
    }
}