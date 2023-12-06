import mongoose, { mongo } from "mongoose";
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

        cached.promise = await mongoose.connect("23", opts).then(mongoose => {
            console.log(mongoose, "kuch bhi");
            return mongoose;
        }).catch(err => {
            console.log(err);
        })
    }
    try {
        cached.conn = await cached.promise       
        console.log("cached db conn");
        
    } catch (error) {
        cached.promise = null;
        throw error;
    }
    console.log("DB Connected");
    return cached.conn;
}

export default dbConnect;
