

const express= require('express')
const {router}= require('./routes/index')
const app = express()
const cookieParse=require('cookie-parser')
app.use(cookieParse('mysecret'))

const PORT = process.env.PORT || 3000


app.use(router)

app.listen(PORT,()=>{
    console.log(`[+] Server is lisening on Port : ${PORT}`)
})