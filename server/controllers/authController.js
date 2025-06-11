import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import { generateUserToken } from "../utils/tokens.js";

//Register user to the Database
export const RegisterUser = asyncHandler(async(req, res) => {
      const { name, email, password } = req.body;

      //check if account already exists
      const userExists = await User.findOne({ email });

      if(userExists){
             res.status(400);
             throw new Error("User account already exists!")
      }

      const default_photo = "https://res.cloudinary.com/dq6subhaj/image/upload/v1744382134/user-default-photo_u3mg1s.jpg";

      const user = await User.create({ name, email, password, profilePicture: default_photo });

      if(user){
           res.status(201).json({
                  message: "Account created successfully",
                  name: user.name,
                  id: user._id,
                  email: user.email,
                  role: user.role
           })
      }else{
            res.status(500).json({
                    message: "Account creation failed. Please try again later"
            })
      }
})

//Login user
export const LoginUser = asyncHandler(async(req, res) => {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if(!user){
             res.status(401)
             throw new Error("Invalid account credentials. Please create an account")
      }
     
      if(user && (await user.matchPasswords(password))){
             generateUserToken(res, user._id);
             res.status(201).json({
                   message: "Login Successful",
                   role: user.role.toLowerCase(),
                   name: user.name,
                   id: user._id
             })
      }else{
            res.status(401);
            throw new Error("Invalid credentials. Please try again with the correct ones.")
      }
})