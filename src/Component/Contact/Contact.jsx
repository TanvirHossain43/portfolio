import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import message from '../../assets/message.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const form = useRef();
    const notify = () => toast("Email sent successfully");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_xh9q6qu', 'template_fp70mhh', form.current, 'KnOQtf8syTl1h-ora')
            .then((result) => {
                console.log(result.text);
                console.log('email sent')
               if(result.text){
                notify()
               }
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    }
    return (


        <div>
            <ToastContainer />

            <div className='md:grid lg:grid grid-cols-2 h-screen px-6 justify-items-center items-center'>

                <form className='md:pl-10 lg:pl-10' ref={form} onSubmit={sendEmail}>
                    <h1 className='text-5xl'>Let's connect.</h1>
                    <p className='text-xl text-justify'>If you want to know more about me or my work, or if you would just like to say hello, send me a message. I'd love to hear from you.</p>
                    <div className='mb-4 mt-4 w-full'>
                        <span>Name</span>
                        <br />
                        <input type="text" placeholder="Enter Your Name" name="user_name" className="input input-bordered input-primary w-full" required />
                    </div>
                    <div className='mb-4 mt-4 w-full'>
                        <span>Email</span>
                        <br />
                        <input type="text" placeholder="Enter Your Email" name="user_email" className="input input-bordered input-primary w-full" required />
                    </div>
                    <div>
                        <span>Message</span>
                        <br />
                        <textarea className="textarea textarea-primary w-full" placeholder="Type your message here" name="message" required ></textarea>
                    </div>
                    <div className='flex justify-end'>
                        <input className='btn btn-primary' type="submit" value="Send"/>
                    </div>
                </form>
                <div className='w-[400px]'>
                    <img src={message} className='w-fit h-fit' alt="" />
                </div>

            </div>
        </div>


    );
};

export default Contact;