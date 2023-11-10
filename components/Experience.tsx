import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiCplusplus, SiReact, SiUnity, SiPhp } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experiences" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="C++"
          subTitle="Computer Science Tutor 2019 - 2020"
          icon={<SiCplusplus />}
        />
        <ExperienceCard
          title="Velisa Africa"
          subTitle="MERN-Stack Development Student 2023 - present"
          icon={<SiReact />}
        />
        <ExperienceCard
          title="Unity"
          subTitle="Game Developer 2019 - 2020"
          icon={<SiUnity />}
        />

        <ExperienceCard
          title="SMU Student Assistant"
          subTitle="System Development 2022 - 2023"
          icon={<SiPhp />}
        />
      </div>
    </div>
  );
};

export default Experience;
