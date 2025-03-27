'use client'

import React from "react";
import emailjs from "emailjs-com";

export default function Contact() {

    function sendEmail(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();

        const form = event.currentTarget as HTMLFormElement;
        const statusMessage = document.getElementById('formStatus') as HTMLParagraphElement | null;

        emailjs.sendForm('service_vri134s', 'template_6yk9br4', form)
            .then(() => {
                if (statusMessage) {
                    statusMessage.textContent = 'Message sent successfully!';
                }
                form.reset();
            })
            .catch((error: any) => {
                if (statusMessage) {
                    statusMessage.textContent = 'Failed to send message. Please try again.';
                }
                console.error('Failed to send message:', error);
            });
    }

    return (
        <section id="contact" className="contact">
            <div className="w-9/12 mx-auto">
                <h2 className="text-3xl font-bold text-center">Contact me</h2>
                <div className="w-9/12 mx-auto mb-10">
                    <form id="contact-form" className="p-8 m-auto max-w-200 rounded-xl backdrop-blur-sm bg-gray-100 shadow-[2px_2px_10px_#0f0f0f8a]" onSubmit={sendEmail}>
                        <div className="text-left mb-4 name">
                            <label htmlFor="name" className="ml-2">Name</label>
                            <input type="text" id="name" className="w-full p-4 rounded-xl border-none bg-white outline-none" name="name" placeholder="Enter your name..." required />
                        </div>
                        <div className="text-left mb-4 email">
                            <label htmlFor="email" className="ml-2">Email</label>
                            <input type="email" id="email" className="w-full p-4 rounded-md text-lg border-none bg-white outline-none" name="email" placeholder="Enter email..." required />
                        </div>
                        <div className="text-left mb-4 text">
                            <label htmlFor="message" className="ml-2">Message</label>
                            <textarea className="w-full p-4 rounded-md text-lg border-none bg-white outline-none resize-none" id="message" name="message" cols={30} rows={8} placeholder="Write your message..." required></textarea>
                        </div>
                        <p id="formStatus" className="m-4 text-lg"></p>
                        <div className="flex justify-center">
                            <button type="submit" className="font-bold text-2xl px-8 py-4 mt-10 rounded-xl bg-black/5 border-2 border-black/80 shadow-[2px_2px_#202020] hover:relative transition-all hover:right-0.5 hover:bottom-0.5 hover:shadow-[5px_5px_#202020] hover:cursor-pointer active:bg-[#cfcdcd]">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}