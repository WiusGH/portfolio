import TechTag from "../tags/TechTag";
import style from "./ProjectCard.module.css";

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
  return (
    <div className={style.projectCard}>
      <img src={imageUrl} alt={`${title} Preview`} />
      <h6>{title}</h6>
      <p>{description}</p>
      <a href={siteUrl} target="_blank" rel="noopener noreferrer">
        Visitar sitio
      </a>
      {githubUrl && (
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          Ver repositorio
        </a>
      )}
      <p>Tecnologías:</p>
      <div className={style.techs}>
        {techs.map((tech) => (
          <TechTag tech={tech} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
