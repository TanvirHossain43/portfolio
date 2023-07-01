import React from 'react';
import { BsLinkedin,BsGithub } from 'react-icons/bs';

const Summary = () => {
    return (
        <div className='w-[400px]'>
            <h2 className='text-3xl text-orange-500 text-center'>Summary</h2>
            <p >Knowledgeable Full Stack Developer brings superior front-end and back-end design to promote organization-specific website presence. Thorough comprehension of complex HTML, CSS and JavaScript programming languages to generate custom webpage design. Extensive collaboration with frontend to ascertain company expectations and oversee site creation, from initial planning through rollout and support. Detail-oriented approach to maintaining website responsiveness, effectiveness and security</p>
            <div className='flex gap-x-4 mx-auto w-20'>
                <a href="https://github.com/TanvirHossain43">
                    <BsGithub className='text-4xl' />
                </a>
                <a href="https://www.linkedin.com/in/tanvir-hossain-5a5b14209/">
                    <BsLinkedin className='text-4xl' />
                </a>
                <button className='btn btn-primary'><a href="https://drive.google.com/file/d/1I4QaunIHuGcmR9eqMt8bQ3YBPai_Dy4-/view?usp=drive_link" download>Download Resume</a></button>
            </div>
        </div>
    );
};

export default Summary;