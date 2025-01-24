import style from "./Projects.module.css";
import playDom from "../../../assets/screenshots/play-dom.png";
import sweetCreation from "../../../assets/screenshots/sweet-creation.png";
import ProjectCard from "../../cards/ProjectCard";

const Projects = () => {
  const projectsList = [
    {
      title: "PlayDOM",
      description:
        "Aplicación web que permite a los usuarios disfrutar de una variedad de juegos creados con HTML, CSS y TypeScript.",
      image: playDom,
      url: "https://s15-25.onrender.com/",
      githubUrl: "https://github.com/WiusGH/Simulacion-s15-React-PHP",
      techs: ["React", "Vite", "Typescript", "Render"],
    },
    {
      title: "Sweet Creation",
      description:
        "Aplicación web que permite a los usuarios hacer pedidos personalizados de productos de pastelería.",
      image: sweetCreation,
      url: "https://www.sweetcreation.store/",
      techs: ["React", "Vite", "Typescript", "Vercel"],
    },
  ];

  return (
    <div className={style.projects}>
      <h5>Proyectos</h5>
      <section className={style.projectList}>
        {projectsList.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            imageUrl={project.image}
            description={project.description}
            siteUrl={project.url}
            githubUrl={project.githubUrl}
            techs={project.techs}
          />
        ))}
      </section>
    </div>
  );
};

export default Projects;
