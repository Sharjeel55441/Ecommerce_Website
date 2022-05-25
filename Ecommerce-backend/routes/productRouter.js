const express = require('express');
const ProductController = require('../controller/productController');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
    destination : (req,file,cb) => {
       cb(null, "uploads/public/");
    },
    filename: (req,file,cb) => {
        cb(null,file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
        if (
          file.mimetype === "image/png" ||
          file.mimetype === "image/jpg" ||
          file.mimetype === "image/jpeg" ||
          file.mimetype === "image/PNG" ||
          file.mimetype === "image/JPG" ||
          file.mimetype === "image/JPEG"
        ) {
          cb(null, true);
        } else {
          cb(null, false);
        }
      };
const upload = multer({storage:storage,fileFilter: fileFilter,limits:{fileSize: 1024 * 1024 * 20}})
router.post("/addproduct",upload.single('productFile'),ProductController.postProduct);

module.exports = router;