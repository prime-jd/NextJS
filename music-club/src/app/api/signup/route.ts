import { UserModel } from "@/models/User";
import dbConnect from "@/lib/dbConnect";
import bcrypt from bcryptjs;

export async function POST(request : Request){
    await dbConnect()

    try {
        const {username, email, password} = await request.json();
        const emailResponse =UserModel.findOne({
            username,
            isVerified : true
        })
        if(!emailResponse.success){
            return Response.json({
                success : false,
                message : emailResponse.message
            },{status : 500})
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