import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from 'framer-motion';
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { useTranslation } from "react-i18next";

const Tech = () => {
  const { t } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>{t("MoreAboutMe")}</p>
        <h2 className={styles.sectionHeadText} style={{ marginBottom: "35px", borderBottom: "1px solid white" }}>
          {t("MyTechnologyStack")}
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div
            className="flex flex-col items-center"
            style={{ width: "7rem", height: "7rem" }}
            key={technology.name}
          >
            <div className="relative w-full h-full">
              <BallCanvas icon={technology.icon} />
            </div>
            <motion.div
              className="mt-2 text-center text-sm font-semibold rounded-lg px-2 py-1"
              style={{
                border: `2px solid ${technology.brandColor}`,
                color: "#fff",
                cursor: "pointer",
                marginBottom: "5px"
              }}
              whileHover={{
                backgroundColor: technology.brandColor,
                y: -6, // Movimiento hacia arriba
                scale: 1.1, // Escala para hacer que se agrande un poco
              }}
            >
              {technology.name}
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
