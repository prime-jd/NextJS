import mongoose, {Schema, Document} from "mongoose";


export interface Message extends Document{
    content : string;
    createdAt : Date;
}

const MessageSchema : Schema<Message> = new mongoose.Schema({
    content : {
        type : String,
        required  : true
    },  
    createdAt : {
        type : Date,
        required : true,
        default : Date.now
    }
});


export interface User extends Document {
     username : string;
     email : string;
     password : string;
     verifyPassword : string;
     verifyPasswordExpiry : Date;
}

const UserSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true, 'Username is required'],
        trim : true
    },
    email : {
        type : String,
        required : true
    },
    passw
})