import Link from "next/link";
import React, { useRef } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
import Reveal from "@/utils/Reveal";



function ContactSection({ contactRefProps }) {
    const form = useRef();

    const emailjsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const emailjsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const emailjsUserId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            emailjsServiceId, 
            emailjsTemplateId, 
            form.current, 
            emailjsUserId)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

  return (
    <div ref={contactRefProps} className='bg-lightBlue px-5 sm:px-20 pt-[42px] pb-[86px]'>
        <Reveal>
            <h1 className='text-4xl mb-10 text-blue font-semibold'>Let&apos;s work together</h1>
        </Reveal>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            <div className='flex flex-col justify-between'>
                <Reveal>
                    <p className='text-lg font-Switzer mb-3'>Whether you have an inquiry, a burning question, a tempting job offer, or just want to drop a friendly 'hi,' I'm all ears! Feel free to reach out through any of my social channels listed below, and if you prefer a more formal approach, you can use the convenient form to contact me. Your messages are always welcome, and I look forward to connecting with you soon!</p>
                </Reveal>
                <Reveal>
                    <div className='flex gap-5 justify-center lg:justify-normal'>
                        <Link href="https://www.linkedin.com/in/sid-ali-habchi-10216125a/">
                            <FaLinkedin size={40} className='cursor-pointer text-blue hover:text-darkBlue transition-all duration-500'/>
                        </Link>
                        <Link href="https://github.com/HabchiSidAli">
                            <FaSquareGithub size={40} className='cursor-pointer text-blue hover:text-darkBlue transition-all duration-500'/>
                        </Link>
                    </div>
                </Reveal>
            </div>
            <Reveal>
                <form className='flex flex-col gap-3 ' ref={form} onSubmit={sendEmail}>
                    <input 
                        name="user_email" 
                        type='email' 
                        className='h-[59px] px-6 py-4 outline-none text-lg font-Outfit rounded-[5px]' 
                        placeholder='Email'>
                    </input>
                    <textarea 
                        name="message" 
                        className='h-[120px] px-6 py-4 outline-none text-lg font-Outfit resize-none rounded-[5px]' 
                        placeholder='Leave me a message!'>
                    </textarea >
                    <button type='submit' className="px-16 py-[13px] bg-blue rounded-[5px] justify-center items-center gap-2.5 flex text-white text-xl font-semibold font-Switzer leading-[30px] w-48 transition-all duration-500 hover:bg-darkBlue">
                        Submit
                    </button>
                </form>
            </Reveal>
        </div>
    </div>
  )
}

export default ContactSection