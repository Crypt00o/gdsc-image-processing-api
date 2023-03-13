const sharp = require('sharp')
const path = require('path')
const fs = require('fs')





const resizeImage=async(name,height,width)=>{
    try{
        const imagesDir=path.join(__dirname,"..","..","www",'images')
        //const imagesDir=path.resolve("www","images")

        const imagePath=path.join(imagesDir,name)
        if(fs.existsSync(imagePath) && typeof height=='number' && height>0 && typeof width=='number' && width>0){
            const newImagePath=path.join(imagesDir,`${height}x${width}_${name}`)
            await sharp(imagePath).resize(width,height).toFile(newImagePath)
            if(fs.existsSync(newImagePath)){
                return newImagePath
            }
            else{
                return false
            }
         }
         else{
            return false
         }
    }
    catch(err){
        console.log(err)
        return false
    }
}






module.exports={resizeImage}