import mongoose from "mongoose";
declare global {
    var mongoose: any
}

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
    throw new Error("MongoDB URI is not present in the env variable.");
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
    console.log("running func");
    
    if (cached.conn) {
        return cached.conn;
    }
    
    if (!cached.promise) {
        const opts = {
            bufferCommands: false
        }
        console.log("connecting to db");
        try {
            cached.promise = await mongoose.connect(MONGODB_URI, opts).then(mongoose => {
                return mongoose;
            })
        } catch (error) {
            console.log(error);
        }
    }
    try {
        cached.conn = await cached.promise       
    } catch (error) {
        cached.promise = null;
        throw error;
    }
    console.log("DB Connected");
    return cached.conn;
}

export default dbConnect;
