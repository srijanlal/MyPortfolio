import React, { useRef, useState } from 'react'
import '../Contact/Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const[done, setDone]=useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_k9w8pq7', 'template_vjj9n3x', form.current, 'SM3VKQXh10S_BESH7')
            .then((result) => {
                console.warn("Successful")
                setDone(true);
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className="contact-form" id='Contact'>
            <div className="w-left">
                <div className="awesome">
                    <span>Get in touch</span>
                    <span>Contact me</span>
                    <div className="blur s-blur" style={{ background: "ABF1FF94" }}></div>
                </div>
            </div>

            {/* -------form-section------ */}
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='user_name' className='user' placeholder='Name' />
                    <input type="email" name='user_email' className='user' placeholder='Email' />
                    <input type="number" name='user_contact' className='user' placeholder='Mobile No.' />
                    <textarea name="message" id="" cols="30" rows="10" className="user" placeholder='Message' />
                    <input type="submit" value="Send" className="button" />
                    <span>{done && `Thanks for contacting me!` }</span>
                    <div className="blur c-blur1" style={{ background: "var(--purple)" }}></div>
                </form>
            </div>
        </div>
    )
}

export default Contact