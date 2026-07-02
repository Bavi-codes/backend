//controllers handles request. they are the decision makers
//controller for register model

import {User} from "../models/user_models.js";


const registerUser = async(requestAnimationFrame, res) =>{
    try{
        const { username, email, password} = requestAnimationFrame.body;

        //basic validation

        if(!username || !email || !password){
            return res.status(400). json({message: "All fields are important!"})
        }

        //check if user exist alreaay

        const existing = await User.findOne({email:email.toLowerCase() });
        if (existing){
            return res.status(400).json({message:"User already exists!" });  
        }

        //create user
        //small user means one user but User means the whole user model
        const user = await User.create({
            username,
            email : email.LowerCase(),
            password,
            loggedIn: false,   
        });

        res.status(201).json({
            message: "User registered",
            user: {id: user._id, email:user.email, username: user.username}
        });
    }catch(error){
        res.status(500).json({messsage:"Internal server error", error: error.message});
    }
};

export {
    registerUser
};