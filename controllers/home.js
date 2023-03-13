const home = (req,res)=>{
    res.status(200).json({"Server":"Image Processing Api"})
    console.log(req.query)
}

module.exports={home}