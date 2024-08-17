import {z} from 'zod'

export const usernameValidation = z
.string()
.min(2, "Username must be at least 2 Characters")
.max(20, "Username Should not be more than 20 Characters")
.regex(/^[a-zA-Z0-9_]+$/,"Username must not contain special Characters")

export const signUpSchema = z.object({
    username : usernameValidation,
    email : z.string().email({message : "Invalid email address"}),
    password : z.string().min(6, {message : "Password must be at least 6 Characters"}),
})