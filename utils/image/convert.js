const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

const convertImage=async(name,type)=>{
    try{
        if (["jpg",'jpeg','gif','png'].includes(String(type).toLowerCase())){
            const imagesDir=path.join(__dirname,"..","..","www",'images')
            const image=path.join(imagesDir,name)
            path.parse(image).name
            const newImagePath= path.join(imagesDir,`${path.parse(image).name}.${type}`)
            console.log(newImagePath)
            await sharp(image).toFormat(String(type).toLowerCase()).toFile(newImagePath)
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


module.exports={convertImage}