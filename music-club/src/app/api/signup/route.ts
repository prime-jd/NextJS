import { UserModel } from "@/models/User";
import dbConnect from "@/lib/dbConnect";
import bcrypt from bcryptjs;

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

        const verifyUserByEmail = await UserModel.findOne({
            email,
            isVerified : true;
        })
        if(verifyUserByEmail){
            
        }
        const createUser = UserModel.create({
            email,
            username,
            password : 
        })
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