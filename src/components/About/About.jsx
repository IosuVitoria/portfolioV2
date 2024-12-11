import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../../styles';
import { services } from '../../constants';
import { fadeIn, textVariant } from '../../utils/motion';
import { SectionWrapper } from '../../hoc';
import './About.css';



const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className = "xs:w-[250px] w-full"> 
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full blues-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer'
      >
        <div
          options = {{
            max: 45,
            scale: 1,
            speed: 450
          }}

          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center '>{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText} style={{marginBottom:"35px", borderBottom: "1px solid white"}} >Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]'
      >
        I am a dedicated full-stack web developer with a background in biology and a strong connection to programming. 
        My journey began with a master&lsquo;s thesis in bioinformatics and later evolved through diverse experiences, 
        including working in a laboratory and becoming an Apple-certified technician. These roles honed my analytical skills, adaptability, 
        and understanding of the business world. Driven by a passion for technology and a desire to pursue my goals, I completed a rigorous bootcamp 
        and transitioned into full-stack development. Every project I tackle is an opportunity to learn, grow, and bring innovative solutions to life.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) =>(
          <ServiceCard key={service.title} index = {index} {...service}/>
        ))}
      </div>
    
    </>
  )
}

export default SectionWrapper(About, "about")