import mongoose from "mongoose";

export interface ContactForm extends mongoose.Document {
    name: string,
    email: string,
    phoneNumber: string,
    message: string
}

const contactFormSchema = new mongoose.Schema<ContactForm>({
    name: String,
    email: String,
    phoneNumber: String,
    message: String
});

export default mongoose.models.ContactForm || mongoose.model<ContactForm>("ContactForm", contactFormSchema);