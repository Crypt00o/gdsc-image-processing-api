const apiRouter=require('express').Router()
const {imageRouter}=require('./image')


apiRouter.use('/image/',imageRouter)

module.exports={apiRouter}
