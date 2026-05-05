import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          I recently graduated from Sefako Makgatho Health Sciences University with an Honours degree in Computer Science andInformation Technology. As a result of my experience, I have a basic understanding of Android Studio using Java, and webdevelopment using HTML, CSS, and PHP. I am currently enrolled in a MERN-Stack skills program to further hone my web development skills so that when I get into the corporate world, I will be prepared to handle most tasks.
        </p>
        <p>
          I am always looking to improve my skills and stay up-to-date with the
          latest best practices in web development. I am excited to continue
          growing as a developer and making meaningful contributions to projects
          and teams.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
