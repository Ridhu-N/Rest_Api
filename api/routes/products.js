const express=require('express');
const router = express.Router();

router.get('/',(req,res,next) =>{
    res.status(200).json({
        message: "The GET method"
    });
});

router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:"The POST method"
    });
});

router.get('/:productId',(req,res,next)=>{
    const id = req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message:'The ID is special here **IF BLOCK',
            id: id
        })
    }
    else{
        res.status(200).json({
            messgae:'The id is passed here **ELSE BLOCK',
            id:id
        })
    }
})

router.patch('/:productId',(req,res,next)=>{
    res.status(200).json({
        message:"The product list is updated"
    })
})

router.delete('/:productId',(req,res,next)=>{
    res.status(200).json({
        message:"The product list is deleted"
    });
});
module.exports = router;