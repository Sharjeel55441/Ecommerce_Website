const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const UserRegistration = new Schema({
    firstName:String,
    lastName:String,
    fullName:String,
    email:{
        type:String,
        required:true,
        required: 'Email address is required',
        validate: [validator.isEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']

    },
    password:String,
    phone:String
},
{
    timestamps:true
}
);

const RegistrationModel = mongoose.model('E_User Registration',UserRegistration);

module.exports = {
    RegistrationModel,
    create: async(body) => {
        try{
            let user = await RegistrationModel.create({
                firstName:body.firstName,
                lastName:body.lastName,
                fullName:body.firstName + " " + body.lastName,
                email:body.email? body.email:'',
                password:body.password? body.password : ''
            });
            return user;
            
        }catch(error) {
            console.log("==============User Registration Model Error===============",error);
        }
    }
}