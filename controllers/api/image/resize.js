const {resizeImage}=require("../../../utils/image/resize")
const path = require('path')
const resize=async(req,res)=>{
    try{
        const {name,width,height}=req.query
        console.log(name,width,height)
        if(name && width && height){
            
           const result =  await resizeImage(name,parseInt(height),parseInt(width))
           if(result){
            // res.setHeaders('Content-Type',`image/${path.parse(result).ext}`) 
            // res.fs()
                res.sendFile(result)
           }
           else{
            res.status(400).json({"Error": "Bad Request You Should request this endpoint with following query params : name:string ,height:number ,width:number"})
           }
        }
        else{
            res.status(400).json({"Error": "Bad Request You Should request this endpoint with following query params : name:string ,height:number ,width:number"})
        }
    }
    catch(err){
        res.status(500).json({"Error":"Internal Server Error"})
    }
}


module.exports={resize}