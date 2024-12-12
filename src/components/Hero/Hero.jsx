import { motion } from "framer-motion";
import './Hero.css';
import { styles } from "../../styles";
import { ComputersCanvas } from "../canvas/Computers";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation(); // Usamos el hook de i18n

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#83c0f5] shadow-[8px_8px_15px_rgba(0,0,0,0.2),_-8px_-8px_15px_rgba(255,255,255,0.8)]" />
          {/* TODO: CAMBIAR EL COLOR DE GRADIENTE CUANDO SE DECIDA LA ESTRUCTURA FINAL DEL HERO */}
          <div className="w-1 sm:h-80 h-40 blue-gradient rounded-lg shadow-[8px_8px_15px_rgba(0,0,0,0.2),_-8px_-8px_15px_rgba(255,255,255,0.8)]" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {t('hero.title')} <span className="text-[#75a7d3]">Iosu</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {t('hero.subtitle')}
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center ">
        <a href="#about">
          <div className="w-[35px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 correccion">
            <motion.div
              animate={{
                y: [0, 24, 0], 
              }}
              transition={{
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut", 
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1 correccionBola"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
