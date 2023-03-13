const static = require('express').static

const {home} = require('../controllers/home')
const {notFound} = require('../controllers/not-found')
const {visitorCount} = require("../middlewares/visitors")
const {apiRouter} = require("./api/index")

const {imageRouter} = require("./api/image")

const path = require('path')

const router = require('express').Router()

const resources=path.join(__dirname,"..","www")

router.get("/",visitorCount,home) // home

router.use("/public",static(resources)) // public resources

router.use("/api/",apiRouter)

router.all("/*",notFound)//not found 


module.exports={router}