import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

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