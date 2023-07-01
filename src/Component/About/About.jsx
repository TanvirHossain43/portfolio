import React from 'react';
import Summary from '../../Section/Summary';
import Skill from '../../Section/Skill';

const About = () => {
    return (
        <div className="md:grid lg:grid grid-cols-2 h-[400px] mx-auto" id='about' >
            <Summary></Summary>
            <Skill></Skill>
        </div>
    );
};

export default About;