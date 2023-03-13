
const sharp = require('sharp')
const path = require('path')
const fs = require('fs')


const rotateImage=async(name,degree)=>{
    try{
        const imagesDir=path.join(__dirname,"..","..","www",'images')
        //const imagesDir=path.resolve("www","images")

        const image=path.join(imagesDir,name)
        if(fs.existsSync(image) && typeof degree=='number' && degree !=NaN && degree !=Infinity ){
            
            
            const newImagePath=path.join(imagesDir,`${degree}_${name}`)

            await sharp(image).rotate(degree).toFile(newImagePath)
            
            if(fs.existsSync(newImagePath)){
                return true
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


module.exports={rotateImage}