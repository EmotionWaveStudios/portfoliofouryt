import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import kjd from "../public/img/projects/kjd.png";
import miranda from "../public/img/projects/miranda.png";
import myTunes from "../public/img/projects/myTunes.png";
import normansTribute from "../public/img/projects/normansTribute.png";
import trombone from "../public/img/projects/trombones.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={normansTribute.src}
          title="Dr. Norman Borlaug's Biography"
          link="https://verdant-crostata-28a535.netlify.app/"
        />
        <ProjectCard
          img={trombone.src}
          title="Original Trombones"
          link="https://brilliant-sunshine-c6ed93.netlify.app/"
        />
        <ProjectCard
          img={myTunes.src}
          title="MyTunes Music"
          link="https://rad-dango-63748b.netlify.app/"
        />
        <ProjectCard
          img={kjd.src}
          title="KJD Homepage"
          link="https://golden-cobbler-7d2ca1.netlify.app/"
        />
        <ProjectCard
          img={miranda.src}
          title="Miranda Papers Homepage"
          link="https://taupe-malabi-05a99c.netlify.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
