import { UserModel } from "@/models/User";
import dbConnect from "@/lib/dbConnect";
import bcrypt from 'bcryptjs';

export async function POST(request : Request){
    await dbConnect()

    try {
        const {username, email, password} = await request.json();
        const verifyUserByUsername = await UserModel.findOne({
            username,
            isVerified : true
        })
        if(verifyUserByUsername){
            return Response.json({
                success : false,
                message : "User already exist"
            },{status : 500})
        }

        const existUserByEmail = await UserModel.findOne({
            email,
            isVerified : true,
        })
        const verifyCode = Math.floor(100000 + Math.random()*90000).toString();
        if(existUserByEmail){
            
        }else{
            const hashedPassword = await bcrypt.hash(password, 10);
            const expiryDate = new Date();
            expiryDate.setHours(expiryDate.getHours()+1);
            const createUser = UserModel.create({
                email,
                username,
                password : hashedPassword,
                verifyCode
            })
        }
        
    } catch (error) {
        console.error("Error registering User", error);
        return Response.json({
            success : false,
            message : "Error registering user"
        },
    {
        status : 500
    })
    }
}