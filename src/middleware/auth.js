
const adminAuth =(req,res,next)=>{  
    console.log("Admin route is being accessed")
    const token = "xyz"

    const isAuthrized = token === "xyz"

    if(!isAuthrized){
        res.status(500).send("You are not authried to access admin routes")
    }else{
        next()
    }
}


const userAuth =(req,res,next)=>{  
    console.log("User route is being accessed")
    const token = "xyz"

    const monika = 'aman'

    const isAuthrized = token === "xyz" && monika === "aman"

    if(!isAuthrized){
        res.status(500).send("You are not authried to access user routes")
    }else{
        next()
    }
}


module.exports = {adminAuth,userAuth}