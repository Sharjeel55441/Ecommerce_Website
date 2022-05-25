const RegistrationModel = require('../model/userRegistration');
const bcrypt = require("bcrypt");
const Validator = require('email-validator')
exports.userRegistration = async (req,res,next) => {
    try {
        let data = req.body;
        if(data.password) {
            const pass = data.password;
            const hash = await  bcrypt.hash(pass,5);
            data.password = hash;
        }
        let user = await RegistrationModel.create(data);
        if(user) {
            return res.status(200).json({
                message:"User Registered Successfully.....",
                hasError:false,
                result:user
            });
        }else {
            return res.status(400).json({
                message:"Something Wrong......!",
                hasError:true,
                result:{}
            })
        }

    }catch(error) {
        console.log("=============User Registration Controller Error================",error);
        next();
    }
}