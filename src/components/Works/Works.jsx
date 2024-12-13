import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useState } from "react";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { github } from "../../assets";
import { Replay } from "@mui/icons-material";
import './Works.css';
import { useTranslation } from "react-i18next";


const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.35)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer"

        whileHover
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl cursor-pointer"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-lg font-bold text-white">{name}</h3>
          <p className="text-sm text-secondary mt-2 textProject-hover">{description}</p>
          <div className="flex flex-wrap gap-2 mt-3 justify-evenly mt-5">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className={`text-xs text-white px-2 py-1 rounded border`}
                style={{ background: `var(--${tag.color})` }} 
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};


const Works = () => {
  const [searchName, setSearchName] = useState("");
  const [searchTech, setSearchTech] = useState("");
  const { t } = useTranslation();

  const resetFilters = () => {
    setSearchName("");
    setSearchTech("");
  };

  window.onload = () => {
    resetFilters();
  };

  const handleReset = () => {
    resetFilters();
    window.location.hash = "#projects"; 
    window.location.reload(); 
  };

  let filteredProjects = searchName || searchTech
    ? projects.filter(
        (project) =>
          project.name.toLowerCase().includes(searchName.toLowerCase()) &&
          project.tags.some((tag) => tag.name.toLowerCase().includes(searchTech.toLowerCase()))
      )
    : projects;

  return (
    <>
      <motion.div
        variants={textVariant}
        initial="hidden"
        animate="visible"
      >
        <p className={styles.sectionSubText}>My Work</p>
        <h2
          className={`${styles.sectionHeadText} border-b border-white pb-2 mb-8`}
        >
          Projects Showcase
        </h2>
      </motion.div>

      <div className="w-full flex flex-col sm:flex-row gap-4 mt-5 mb-5">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="p-2 rounded-md border border-gray-500 w-full sm:w-[48%]"
        />
        <input
          type="text"
          placeholder="Search by technology..."
          value={searchTech}
          onChange={(e) => setSearchTech(e.target.value)}
          className="p-2 rounded-md border border-gray-500 w-full sm:w-[48%]"
        />
      </div>

      <div className="flex justify-center w-[100%]">
        <button
          onClick={handleReset}
          className="mt-4 p-2 rounded-md bg-tertiary text-white w-full sm:w-[20%] self-center flex justify-evenly border border-gray-500 buttonReset-hover"
        >
          <Replay />
          Reset
        </button>
      </div>

      <div className="mt-10 flex flex-wrap gap-7">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))
        ) : (
          <p className="text-white">No projects match your search criteria.</p>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
