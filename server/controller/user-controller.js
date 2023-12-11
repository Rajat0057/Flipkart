import {userData} from "../modal/user-schema.js"


export const userSignup = async (req, resp) => {

    //  req-> jb fronend se ayega wo req me ayega jaise -> url , body , header
    // resp-> backend se fronedn ko kuch bhejna hai uske liye
    try {
       const exist= await userData.findOne({username:req.body.username})
       if(exist)
       {
        return resp.status(401).json({message:"username already in database"})
       }
        console.log(req.body)
        const user = req.body
        const newUser = new userData(user)
        await newUser.save()
        resp.status(200).json({message:user})
    }
    catch {
        resp.status(500).json({message:console.error.message})
    }



} 