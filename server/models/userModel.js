import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema({
     name: { type: String, required: true },
     email: { type: String, required: true },
     googleID: { type: String, default: ""},
     username: { type: String },
     bio: { type: String },
     role: { type: String, default: "Builder"},
     password: { type: String, required: true },
     phone: { type: String },
     address: { type: String},
     verified: { type: Boolean, default: true },
     profilePicture: { type: String }
}, { timestamps: true });

//Hash password
userSchema.pre("save", async function (next) {
      if(!this.isModified('password')){
            next();
      }
      const salt = await bcrypt.genSalt(10);

      this.password = bcrypt.hash(this.password, salt);
})

//Hash password incase updated
userSchema.pre(["findByIdAndUpdate", "findOneAndUpdate"], async function(next){
       const data = this.getUpdate();
       const salt = await bcrypt.genSalt(10);
       if(data.password){
              data.password = bcrypt.hash(data.password, salt);
       }
       next();
})

//Compare passwords
userSchema.methods.matchPasswords = async function(passwordInput) {
    return await bcrypt.compare(passwordInput, this.password);
}

const User = mongoose.model("User", userSchema);

export default User;