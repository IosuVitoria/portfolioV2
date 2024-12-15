import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import fotoCV from './assets/yo.png'; 
import { fadeIn } from '../../utils/motion'; 
import { useTranslation } from 'react-i18next'; 
import { DownloadOutlined } from '@mui/icons-material';
import resumebg from '../../assets/resumebg.webp'; 
import { styles } from '../../styles';
import cvEs from './assets/cv-es.pdf';
import cvEn from './assets/cv-en.pdf';

const tiltOptions = {
  max: 25,
  scale: 1.1,
  speed: 400,
};

const Resume = () => {
  const { t } = useTranslation(); 

  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center min-h-screen py-10 px-5 bg-cover bg-center mt-10"
      style={{ backgroundImage: `url(${resumebg})`, backgroundSize: "cover", backgroundPosition:"center", backgroundRepeat: "no-repeat" }} 
    >
      <div className="flex flex-col items-center md:items-center md:w-3/4 lg:w-1/2">
        <motion.h2 className={`${styles.heroHeadText} sm:text-[9px]`} style={{position: "relative", top: "-35px", borderBottom: "1px solid white"}}>
          {t("Information")}
        </motion.h2>

        <Tilt options={tiltOptions} className="w-64 h-64 md:w-80 md:h-80 mb-6">
          <motion.img
            src={fotoCV}
            alt="Iosu Gomez Valdecantos"
            className="w-full h-full object-cover rounded-full shadow-xl cursor-pointer"
            variants={fadeIn("up", "spring", 0.5, 1)}
          />
        </Tilt>

        {/* Nombre */}
        <motion.h2
          variants={fadeIn("up", "spring", 0.75, 1)}
          className="text-white text-3xl md:text-4xl font-bold mt-4 text-center"
        >
          Iosu Gómez Valdecantos
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-4 mt-6 w-full justify-center">
          <motion.a
            href={cvEs}
            download="cv-es.pdf"
            variants={fadeIn("up", "spring", 1, 1.5)}
            className="px-6 py-3 bg-tertiary text-white rounded-lg border shadow-lg hover:bg-blue-700 transition-all w-full xl:w-[220px] sm:w-auto flex items-center justify-evenly"
          >
            <DownloadOutlined className="mr-2" />
            {t('downloadCVSpanish')}
          </motion.a>

          <motion.a
            href={cvEn} 
            download = "cv-en.pdf"
            variants={fadeIn("up", "spring", 1.2, 1.5)}
            className="px-6 py-3 bg-tertiary text-white rounded-lg border shadow-lg hover:bg-blue-700 transition-all w-full xl:w-[220px] sm:w-auto flex items-center justify-evenly"
          >
            <DownloadOutlined className="mr-2" />
            {t('downloadCVEnglish')}
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Resume;

