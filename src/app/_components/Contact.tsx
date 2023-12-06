'use client';

import React, { useCallback, useEffect, useState } from "react";
import { submitFormAction } from "../action";
import { useFormState } from "react-dom";
import ContactCard from "./ContactCard";

export interface ContactForm {
    name: string,
    email: string,
    phoneNumber: string,
    message: string
}

export interface IContactCard {
    name: string,
    type: string,
    email: string,
    phoneNumber: string,
}

const Contact = () => {

    // const [contactDetails, setContactDetails] = useState<ContactForm>({
    //     name: "",
    //     email: "",
    //     phoneNumber: "",
    //     message: "",
    // });

    // const [currentInput, setCurrentInput] = useState<{name: string, value: string}>({
    //     name: "",
    //     value: ""
    // });

    // const [inputErrors, setInputErrors] = useState({
    //     name: "",
    //     email: "",
    //     phoneNumber: "",
    //     message: "",
    // });

    // useEffect(() => {        
    //     const handleError = setTimeout(() => {
    //         const regex = {
    //             phoneNumber: /\d{10}/g,
    //         }
    
    //         switch (currentInput.name) {
    //             case "phoneNumber":
    //                 if(!regex.phoneNumber.test(currentInput.value)) {
    //                     setInputErrors(old => ({...old, [currentInput.name]: "A number should contain 10 digits"}));
    //                     console.log(inputErrors);
    //                 }
    //                 break;
            
    //             default:
    //                 break;
    //         }
    //     }, 2000);
        
    //     return () => clearTimeout(handleError);
    // }, [currentInput]);

    // const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     const {name, value} = e.target;

    //     setContactDetails(old => ({...old, [name]: value}));
    //     setCurrentInput({name: name, value: value});
    // }

    // const [formState, action] = useFormState(submitFormAction, {message: null});

    // useEffect(() => {
    //     console.log(formState);
        
    //     if (formState.message !== null) {
    //         alert(formState.message);
    //     }
    // }, [formState]);
    
    return (
        <div className="overflow-hidden">
            {/* Contact Cards */}
            <div>
                <h1 className="text-[36px] text-center m-[61px]">
                    Contact
                </h1>
                <div className="custom-scroll overflow-x-scroll p-4 flex items-center md:justify-center gap-4 md:gap-20">
                    <ContactCard name=" Gabriel Dinardi" type="Commerical" email=" gabriel.dinardi@mazzafc.tech" phoneNumber="95965-0428" />
                    <ContactCard name=" Gabriel Dinardi" type="Commerical" email=" gabriel.dinardi@mazzafc.tech" phoneNumber="95965-0428" />
                </div>
            </div>

            {/* Contact Form */}
            <div className="md:p-40 p-4">
                <h1 className="text-[36px] text-center m-[61px]">
                    Or leave your message
                </h1>
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-[50%]">
                        <form className="flex flex-col gap-[18px]" action={submitFormAction}>
                            <input
                                required
                                className="custom-input"
                                placeholder="Name"
                                name="name"
                                // value={contactDetails.name}
                                // onChange={handleInput}
                            />
                            <input
                                required
                                className="custom-input"
                                placeholder="Email"
                                name="email"
                                // value={contactDetails.email}
                                // onChange={handleInput}

                            />
                            <input
                                required
                                className="custom-input"
                                placeholder="Phone Number"
                                name="phoneNumber"
                                type="tel"
                                // value={contactDetails.phoneNumber}
                                // onChange={handleInput}
                                pattern="[0-9]{10}"
                                title="Number should be of 10 digits."
                            />
                            <textarea
                                required
                                className="bg-[#0E0E0E] p-[21px] w-[100%] md:w-[496px] h-[218px] rounded-[4.3px] resize-none"
                                placeholder="Your message"
                                name="message"
                            />
                            <button className="w-[271px] h-[60px] bg-[#FA002D] rounded-[6px]">
                                Contact
                            </button>
                        </form>
                    </div>
                    <div className="my-10 md:m-0 md:w-[50%]">
                        <iframe
                            className="w-[100%] md:w-[604px] h-[458px]"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31558683.231993817!2d37.14313988198758!3d15.082463727372534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1701495331246!5m2!1sen!2sin"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
