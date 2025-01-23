import style from "./TechTag.module.css";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiIntellijidea } from "react-icons/si";
import { SiPycharm } from "react-icons/si";
import { SiRender } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { SiPostman } from "react-icons/si";
import { SiInsomnia } from "react-icons/si";

interface TechTagProps {
  tech: string;
}

const TechTag: React.FC<TechTagProps> = ({ tech }) => {
  const renderIcon = () => {
    switch (tech.toLowerCase()) {
      case "html":
        return <FaHtml5 className={`${style.icon} ${style.html}`} />;
      case "css":
        return <IoLogoCss3 className={`${style.icon} ${style.css}`} />;
      case "javascript":
        return (
          <IoLogoJavascript className={`${style.icon} ${style.javascript}`} />
        );
      case "typescript":
        return (
          <BiLogoTypescript className={`${style.icon} ${style.typescript}`} />
        );
      case "react":
        return <FaReact className={`${style.icon} ${style.react}`} />;
      case "vite":
        return <SiVite className={`${style.icon} ${style.vite}`} />;
      case "python":
        return <FaPython className={`${style.icon} ${style.python}`} />;
      case "flask":
        return <SiFlask className={`${style.icon} ${style.flask}`} />;
      case "java":
        return <FaJava className={`${style.icon} ${style.java}`} />;
      case "springboot":
        return (
          <BiLogoSpringBoot className={`${style.icon} ${style.springboot}`} />
        );
      case "mysql":
        return <SiMysql className={`${style.icon} ${style.mysql}`} />;
      case "mongodb":
        return <SiMongodb className={`${style.icon} ${style.mongodb}`} />;
      case "aws":
        return <FaAws className={`${style.icon} ${style.aws}`} />;
      case "git":
        return <FaGitAlt className={`${style.icon} ${style.git}`} />;
      case "github":
        return <FaGithub className={`${style.icon} ${style.github}`} />;
      case "vscode":
        return <VscVscode className={`${style.icon} ${style.vscode}`} />;
      case "intellij":
        return <SiIntellijidea className={`${style.icon} ${style.intellij}`} />;
      case "pycharm":
        return <SiPycharm className={`${style.icon} ${style.pycharm}`} />;
      case "render":
        return <SiRender className={`${style.icon} ${style.render}`} />;
      case "vercel":
        return <IoLogoVercel className={`${style.icon} ${style.vercel}`} />;
      case "postman":
        return <SiPostman className={`${style.icon} ${style.postman}`} />;
      case "insomnia":
        return <SiInsomnia className={`${style.icon} ${style.insomnia}`} />;
      default:
        return null;
    }
  };

  return (
    <div className={style.techTag}>
      {renderIcon()} {tech}
    </div>
  );
};

export default TechTag;
