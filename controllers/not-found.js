const notFound = (req,res)=>{
    res.status(404).json({"Error":"Not Found"})
}

module.exports={notFound}