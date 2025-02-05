import TechTag from "../tags/TechTag";
import style from "./ProjectCard.module.css";
import { useLanguage } from "../contexts/LanguageContext";
import { IoIosGlobe } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  imageUrl: string;
  description: string;
  siteUrl: string;
  githubUrl?: string;
  techs: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  imageUrl,
  description,
  siteUrl,
  githubUrl,
  techs,
}) => {
  const { t } = useLanguage();
  return (
    <div className={style.projectCard}>
      <h6 className={style.title}>{title}</h6>
      <img className={style.image} src={imageUrl} alt={`${title} Preview`} />
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
