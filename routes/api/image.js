const { resize } = require('../../controllers/api/image/resize')

const imageRouter=require('express').Router()
imageRouter.get('/resize',resize)


module.exports ={imageRouter}