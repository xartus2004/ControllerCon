import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({
    discordId:{type:String, required:true, unique:true},
    username:{type:String, required:true},
    bio:{type:String, required:true, default:"User's bio is empty"},
    pic:{type:String, required:false, default:"./Images/user-default.png"}
},{ timestamps:true });

export const User = mongoose.model('User', userSchema);

