const visitorCount= (req,res,next)=>{
    console.log(req.cookies)
    console.log(req.signedCookies)
    if (typeof req.cookies=='object'&& req.cookies['visit-times']){
       let visitTimes= parseInt(req.cookies['visit-times'])
        res.cookie("visit-times",++visitTimes,{signed:true,
            httpOnly:true
        })
    }

    else{
        res.cookie("visit-times",1,{signed:true,
            httpOnly:true
        })
    }

    next()
}

module.exports={visitorCount}
