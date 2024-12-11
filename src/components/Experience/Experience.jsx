import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.css';
import { styles } from '../../styles';
import { experiences } from '../../constants';
import { SectionWrapper } from '../../hoc';
import { textVariant, fadeIn } from '../../utils/motion';

// Componente de tarjeta de experiencia con estilo azulado y efecto 3D
const ExperienceCard = ({ experience, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.6 * index, 0.80)}
      whileHover={{
        translateY: -15,
        rotateX: isLeft ? -10 : 10,
        rotateY: isLeft ? 10 : -10,
      }}
    >
      <VerticalTimelineElement
        position={isLeft ? "left" : "right"}
        contentStyle={{
          background: "#E3F2FD",
          color: "#333",
          border: `4px solid ${experience.iconBorder}`,
          boxShadow:
            "3px 4px 6px rgba(0, 0, 0, 0.35), -2px -2px 5px rgba(255, 255, 255, 0.8)",
          borderRadius: "15px",
          marginTop: "15px",
        }}
        contentArrowStyle={{ borderRight: "7px solid #BBDEFB" }}
        date={experience.date}
        iconStyle={{
          background: experience.iconBg,
          border: `4px solid ${experience.iconBorder}`,
          boxShadow:
            "3px 4px 6px rgba(0, 0, 0, 0.35), -2px -2px 5px rgba(255, 255, 255, 0.8)",
        }}
        icon={
          <div className="flex items-center justify-center w-full h-full">
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        }
      >
        <div>
          <h3 className="text-[24px] font-bold" style={{ color: "#333" }}>
            {experience.title}
          </h3>
          <p className="text-[16px] font-semibold" style={{ color: "#555" }}>
            {experience.company_name}
          </p>
        </div>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, idx) => (
            <li
              key={`experience-point-${idx}`}
              className="text-[14px] pl-1 tracking-wider"
              style={{ color: "#555" }}
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    </motion.div>
  );
};

// Componente principal con estilo ajustado
const Experience = () => {
  return (
    <>
      {/* Cabecera animada */}
      <motion.div variants={textVariant} >
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText} style={{marginBottom:"35px", borderBottom: "1px solid white"}}>Work Experience</h2>
      </motion.div>

      {/* Línea del tiempo */}
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} index={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
