import html from '../assets/HTML5.png'
import css from '../assets/css.png'
import react from '../assets/react.png'
import JavaScript from '../assets/JavaScript.png'
import NodeJs from '../assets/nodejs.png'
import bootstrap from '../assets/bootstrap.jpg'
import ex from '../assets/ex.png'
import firebase from '../assets/firebase.png'
import mongoDB from '../assets/mongo.jpg'
import mui from '../assets/mui.png'
import netlify from '../assets/Netlify.png'
import nextjs from '../assets/nextjs.png'
import tailwind from '../assets/tailwind.png' 
import vercel from '../assets/vercel.jpg'
import './skill.css' 
const Skill = () => {
    return (
        <div className='grid grid-cols-4 overflow-scroll skill '  style={{ maxHeight: '19rem' ,maxWidth:'34rem' }}>
        
               <img  src={html}  className="w-full skill-img"alt="" /> 
         
         
               <img  src={css}  className="w-full skill-img"alt="" /> 
         
         
               <img  src={JavaScript}  className="w-full skill-img"alt="" /> 
           
            
               <img  src={react}  className="w-full skill-img"alt="" /> 
         

            
               <img  src={nextjs}  className="w-full skill-img"alt="" /> 
          

               <img  src={bootstrap}  className="w-full skill-img"alt="" /> 
          
        
               <img  src={firebase}  className="w-full skill-img"alt="" /> 
          
               <img  src={mongoDB}  className="w-full skill-img"alt="" /> 
           
               <img  src={NodeJs}  className="w-full skill-img"alt="" /> 
         
               <img  src={ex}  className="w-full skill-img"alt="" /> 
          
               <img  src={tailwind}  className="w-full skill-img"alt="" /> 
            
               <img  src={mui}  className="w-full skill-img"alt="" /> 
            
               <img  src={vercel}  className="w-full skill-img"alt="" /> 
          
               <img  src={netlify}  className="w-full skill-img"alt="" /> 
        
            
            
           
        </div>
    );
};

export default Skill;