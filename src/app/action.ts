'use server';

import mongoDBConnection from "../../lib/dbConnect";
import ContactFormModel, { ContactForm } from "../../models/ContactForm";

mongoDBConnection();

export async function submitFormAction(prevState: any, formData: FormData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const phoneNumber = formData.get("phoneNumber");
    const message = formData.get("message")
    
    try {
        await ContactFormModel.create<ContactForm>({
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            message: message
        });

        return {message: "Submitted Successfully"};
    } catch (error) {   
        console.log(error);
        return {message: error}
    }

}