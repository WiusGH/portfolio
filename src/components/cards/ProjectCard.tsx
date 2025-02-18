import TechTag from "../tags/TechTag";
import style from "./ProjectCard.module.css";
import { useLanguage } from "../contexts/LanguageContext";
import { IoIosGlobe } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  image1Url: string;
  image2Url: string;
  description: string;
  siteUrl: string;
  githubUrl?: string;
  techs: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image1Url,
  image2Url,
  description,
  siteUrl,
  githubUrl,
  techs,
}) => {
  const { t } = useLanguage();
  return (
    <div className={style.projectCard}>
      <h6 className={style.title}>{title}</h6>
      <div className={style.imagesContainer}>
        <img className={style.image} src={image1Url} alt={`${title} Preview`} />
        <img className={style.image} src={image2Url} alt={`${title} Preview`} />
      </div>
      <p className={style.description}>{description}</p>
      <div className={style.links}>
        <a href={siteUrl} target="_blank" rel="noopener noreferrer">
          <span>
            <IoIosGlobe />
            {t("seeSite")}
          </span>
        </a>
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <span>
              <FaGithub />

              {t("seeRepo")}
            </span>
          </a>
        )}
      </div>
      <p className={style.techsTitle}>{t("techs")}:</p>
      <div className={style.techs}>
        {techs.map((tech) => (
          <TechTag tech={tech} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
