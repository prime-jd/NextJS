import mongoose from 'mongoose';

type ConnectionObject = {
    isConnected? : Number
}

const connection : ConnectionObject = {}

async function dbConnect() : Promise<void> {
    if(connection.isConnected){
        console.log("Already connected to database")
        return
    }

    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/next`)
        console.log(connection.connection.host);
    } catch (error) {
        console.log("MongoDB not connected", error)
    }
}