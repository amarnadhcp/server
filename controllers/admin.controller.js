import { compare } from "bcrypt";
import jwt from 'jsonwebtoken'

import Admin from "../modals/admin.model.js"


export const login = async(req,res,next)=>{
    try {
        console.log(req.body)
        console.log("success");
    
        const admin = await Admin.findOne({email:req.body.email})
        if(!admin) return res.status(201).json({access:false,message:"user no found"})

        const isCorrect = compare(admin.password,req.body.password)
        if(!isCorrect) return res.status(201).json({access:false,message:"password is wrong"})

        const token = jwt.sign({adminId:admin._id},process.env.JWT_KEY,{
            expiresIn: 600000,
        })
        return res.status(201).json({access:true,message:"logged in",admin,token})
    } catch (error) {
        
    }
}