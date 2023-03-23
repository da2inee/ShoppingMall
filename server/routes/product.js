const express = require('express');
const router = express.Router();
const multer = require('multer');
const {Product} = require('../models/Product');
//=================================
//             Product
//=================================

const storage = multer.diskStorage({
    
    destination: function(req, file, cb){
        cb(null,'uploads/')
    },
    filename: function (req, file, cb){
        cb(null, `${Date.now()}_${file.originalname}`);
    },
});
const upload = multer({storage:storage}).single("file");

router.post('/image', (req,res) => {
    upload(req,res,(err)=>{
        if (err) {
            console.log("jjjg")
            return res.json({success:false,err})  
        }
        console.log("Ssusc")
        return res.json({success:true,filePath:res.req.file.path,fileName:res.req.file.filename})
    
    })
})

router.post('/', (req,res) => {
    //프론트에서 받은 정보들 database에 저장하기
    const product = new Product(req.body)
    product.save((err)=>{
        if (err) return res.status(400).json({success:false,err}) 
        return res.status(200).json({success:true})
    
    })
})

module.exports = router;
