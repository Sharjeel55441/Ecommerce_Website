const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
//import routes
const RegistrationRouter = require('./routes/registrationRouter');
const ProductRouter = require('./routes/productRouter');
dotenv.config({path:'.env'});

//header setup
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use("/uploads",express.static(__dirname + "/uploads/public/"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//call routes

app.use('/api',RegistrationRouter);
app.use('/api',ProductRouter)
//db connection and listening port

var PORT = process.env.PORT;
mongoose
.connect( process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then((result) => {
    app.listen(PORT, () => {
        console.log(`app listening: ${PORT}`)
    })
}).catch((err) => {
    console.log("[App.mongoose]".red, err)
})