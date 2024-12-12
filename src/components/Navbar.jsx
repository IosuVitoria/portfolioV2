import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importar el hook de i18next
import { styles } from '../styles';
import { logo, menu, close } from '../assets';
import { esp, eng } from '../assets';  
import './Navbar.css';

// Importaciones explícitas para cada idioma
import { navLinks } from '../constants/index'; 
import { navLinksES } from '../constants/indexES'; 
import { RecordVoiceOverOutlined } from '@mui/icons-material';

const Navbar = () => {
  const { i18n } = useTranslation(); 
  const [active, setActive] = useState("");
  const [toogle, setToogle] = useState(false);
  const [currentNavLinks, setCurrentNavLinks] = useState(navLinks);
  const [languageMenuVisible, setLanguageMenuVisible] = useState(false);

  const changeLanguage = (lng) => {
    if (lng === "es") {
      setCurrentNavLinks(navLinksES);
    } else {
      setCurrentNavLinks(navLinks);
    }
    i18n.changeLanguage(lng); 
    localStorage.setItem('language', lng);
    setLanguageMenuVisible(false); 
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex-items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-11 h-11 object-contain mr-2" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            IosuDev &nbsp;
            <span className="sm:block hidden"> | Full Stack Developer</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {currentNavLinks.map((link) => (
            <li
              key={link.id}
              className={`nav-item ${
                active === link.title ? "nav-item-active text-white" : "text-secondary"
              } text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Botón de selección de idioma con banderas */}
        <div className="absolute sm:right-5 right-3 top-5 sm:top-5 language-selector">
            <button
              className="w-10 h-10 rounded-full bg-primary p-2 border bg-tertiary flex justify-center items-center"
              onClick={() => setLanguageMenuVisible(!languageMenuVisible)}
            >
              <RecordVoiceOverOutlined 
                alt="language-selector"
                className="w-full h-full object-cover rounded-full"
              />
            </button>

            {/* Menú desplegable de idiomas */}
            {languageMenuVisible && (
              <div className="absolute right-0 top-12 bg-primary p-2 rounded-xl shadow-lg w-[150px] border">
                <button
                  className="flex items-center gap-2 mb-2"
                  onClick={() => changeLanguage('es')}
                >
                  <img src={esp} alt="Español" className="w-8 h-8 object-cover rounded-full" />
                  Español
                </button>
                <button
                  className="flex items-center gap-2"
                  onClick={() => changeLanguage('en')}
                >
                  <img src={eng} alt="English" className="w-8 h-8 object-cover rounded-full" />
                  English
                </button>
              </div>
            )}
          </div>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toogle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToogle(!toogle)}
          />

          <div
            className={`${
              !toogle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {currentNavLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-white' : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToogle(!toogle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
