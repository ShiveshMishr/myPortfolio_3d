import React from 'react'
import {Link} from 'react-router-dom';
import {arrow} from '../assets/icons'

const InfoBox = ({text , link , btnText}) => (
  <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} className='w-4 h-4 object-contain'/>
    </Link>
  </div>
)
const renderContent = {
  1 : (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5 ' > Hi , I am <span              className='font-semibold'>Shivesh</span>👋
    <br />
      Passionate Full Stack Software Developer skilled in JavaScript, React, Node.js, and more.
      <br/> Eager to innovate and build impactful web and mobile applications 🚀
    </h1>
  ),
   2: (
    <InfoBox 
    text= "I am Final Year Student, worked on many Projects and piked up many skills along the way"
    link = "/about"
    btnText="Learn more about me"
    />
  ),
  3 : (
    <InfoBox 
    text= "I am Final Year Student, worked on many Projects and piked up many skills along the way"
    link = "/projects"
    btnText="Visit my Portfolio"
    />  ),
   4: (
    <InfoBox 
    text= "All ready to work with you with full Potencial. Hire ME?  "
    link = "/contact"
    btnText="Let's talk"
    />
  ),
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo