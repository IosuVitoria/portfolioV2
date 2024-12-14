
import { LinkedIn, GitHub, Twitter } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { styles } from '../../styles';
import XIcon from '@mui/icons-material/X';
import "./Footer.css"

const Footer = () => {
  return (
    <motion.div
      className={`w-full flex flex-col items-center justify-center ${styles.paddingY} bg-tertiary`}
    >
      <motion.h2
        className="text-center text-white text-[16px] sm:text-[18px] font-medium"
      >
        &copy; 2024 Iosu Gómez Valdecantos
      </motion.h2>
      <div className="flex space-x-4 mt-4">
        <a href="https://github.com/IosuVitoria" target="_blank" rel="noopener noreferrer">
          <GitHub 
            className="text-white hover:text-gray-400 border border-white rounded-full footer-button hover:bg-blue-700"

            />
        </a>
        <a href="https://x.com/IosuRunning" target="_blank" rel="noopener noreferrer">
          <XIcon className="text-white hover:text-gray-400 border border-white  rounded-full footer-button hover:bg-blue-700" />
        </a>
        <a href="https://www.linkedin.com/in/iosu-gomez-biologo-analista/" target="_blank" rel="noopener noreferrer">
          <LinkedIn className="text-white hover:text-gray-400  border border-white  rounded-full footer-button hover:bg-blue-700" />
        </a>
      </div>
    </motion.div>
  );
};

export default Footer;
