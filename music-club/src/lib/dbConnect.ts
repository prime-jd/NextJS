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
        const connect= await mongoose.connect(`${process.env.MONGODB_URI}/next`)
        connection.isConnected = connect.connections[0].readyState
        console.log("DB connected Successfully",connect.connection.host);
    } catch (error) {
        console.log("MongoDB not connected", error)
        process.exit(1)
    }
}

export default dbConnect;