import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useState } from "react";
import { styles } from "../../styles";
import { GitHub } from "@mui/icons-material";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";

const ProjectCard = ({}) => {
  return(
    <div>Proyecto</div>
  )
}

const Works = () => {
  const [searchName, setSearchName] = useState("");
  const [searchTech, setSearchTech] = useState("");

  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchName.toLowerCase()) &&
      project.tags.some((tag) =>
        tag.name.toLowerCase().includes(searchTech.toLowerCase())
      )
  );

  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 0.1 } },
        }}
        initial="hidden"
        animate="visible"
      >
        <p className={styles.sectionSubText}>My work</p>
        <h2
          className={`${styles.sectionHeadText}`}
          style={{ marginBottom: "35px", borderBottom: "1px solid white" }}
        >
          Some projects.
        </h2>
      </motion.div>

      <div className="w-full flex flex-col gap-4 mt-5">
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

      <div className="mt-20 flex flex-wrap gap-7">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
        {filteredProjects.length === 0 && (
          <p className="text-white">No projects match your search criteria.</p>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
