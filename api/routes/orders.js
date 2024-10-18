const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'The order GET method'
    });
});

router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:"The order POST Method"
    });
});

router.get("/:orderId",(req,res,next)=>{
    const orderId= req.params.orderId;
    if(orderId==='Special'){
        res.status(200).json({
            message:"The order ID is special",
            id:orderId
        })
    }
    else{
        res.status(200).json({
            message:"The order Id is entered here"
        })
    }
})

router.patch("/:orderId",(req,res,next)=>{
    res.status(200).json({
        message:"The order detail is added"
    });
})

router.delete("/:orderId",(req,res,next)=>{
    res.status(200).json({
        message:"The order detail is deleted"
    });
});

module.exports = router;