import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) =>{
    try{
        const {name, email, password, phone, address} = req.body
        //validations
        if(!name){
            return res.send({error:'Name is Required'})
        }
          if(!email){
            return res.send({error:'Email is Required'})
        }
          if(!password){
            return res.send({error:'Password is Required'})
        }
          if(!phone){
            return res.send({error:'Phone Number is Required'})
        }
          if(!address){
            return res.send({error:'Address is Required'})
        }

        //chexchking exisiting user 
        const exisitingUser = await userModel.findOne({email})
        if(exisitingUser){
            return res.status(200).send({
                success:true,
                message:' Already Register please login ',
            })
        }

        //register user
        const hashedPassword = await hashPassword(password)
        //saving
        const user = await new userModel({name,email,phone,address,password:hashedPassword}).save()

        res.status(201).send({
            success:true,
            message:'User Registered Successfully',
            user
        })

    } catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message: " Error in Registration ",
            error
        })
    }
}

// Post login
export const loginController = async (req, res)=>{
    try{
        const {email, password} = req.body
        //validations
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message: " Invalid Email and Password ",
            })
        }
        //checking existing user
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message: " Email is not registered ",
            })
        }

        const match = await comparePassword (password, user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message: "Invalid Password",
            })
        }
        //generating token
        const token = await JWT.sign({_id:user._id}, process.env.JWT_SECRET,{expiresIn:"7d"})
        res.status(200).send({
            success:true,
            message: "Login Successfully",
            user:{
                name:user.name,
                email:email.email,
                phone:user.phone,
                address:user.address,
            },
            token
        })

    } catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message: " Error in Login ",
            error
        })
    }

}

//test controller
export const testController = (req,res)=>{
    res.send(" Protected Routes: ")
    
}