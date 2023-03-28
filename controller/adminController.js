const signup = (req,res)=>{
    console.log(req.body)
    res.send("signup controller")
}

module.exports= {signup}