import userModel from "../Models/userModel.js";
import bcrypt from 'bcrypt';


export const registerUser = async(req,res)=>{
    const {username, password, firstname, lastname} = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password,salt);
    const newUser = new userModel({username,password:hashPass,firstname,lastname});
    try{
        await newUser.save();
        res.status(200).json(newUser);

    } catch(error){
        res.status(500).json({message:error.message});
    }
}
export const loginUser=async(req,res)=>{
    const {username,password} = req.body;
    try{
        const user = await userModel.findOne({username:username});
        if(user){
            const validity=await bcrypt.compare(password,user.password);
            validity?res.status(200).json(user):res.status(403).json({message:'incorrect password'});
        } else{
            res.status(400).json({message:'user not found'});
        }
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}