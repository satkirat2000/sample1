import { NextResponse } from "next/server";
import mongoDBConnection from "../../../../lib/dbConnect";
import Example from "../../../../models/ContactForm";

// import mongoose from "mongoose";

// const mongoDBConnection = async () => {    
//     if (process.env.MONGODB_URI !== undefined) {
//         mongoose.set('strictQuery', false);
//         mongoose.connect(process.env.MONGODB_URI)
//             .then(conn => {
//                 console.log("DB Connected");
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     }
// }

// mongoDBConnection();

export async function GET(req: Request) {

    return NextResponse.json({
        message: "hello",
    }, {status: 200});
}