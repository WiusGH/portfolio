import style from "./Projects.module.css";
import playDom from "../../../assets/screenshots/play-dom.png";
import sweetCreation from "../../../assets/screenshots/sweet-creation.png";
import ProjectCard from "../../cards/ProjectCard";
import betterCommerce from "../../../assets/screenshots/better-commerce.png";
import converter from "../../../assets/screenshots/converter.png";

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
    {
      title: "Visualizador de productos de un E-commerce",
      description:
        "Visualizador de productos creado con componentes reutilizables y dinámicos que permiten filtrar y ordenar los productos de un E-commerce.",
      image: betterCommerce,
      url: "https://prueba-tecnica-silk.vercel.app/",
      githubUrl: "https://github.com/WiusGH/prueba-tecnica",
      techs: ["React", "Typescript", "Material UI", "Vercel"],
    },
    {
      title: "Conversor de monedas de Alura",
      description:
        "Conversor de monedas cuyo backend fue creado con Java pero como extra le implemente un frontend para el usuario.",
      image: converter,
      url: "https://wiusgh.github.io/AluraChallengeConversorDeMonedas/",
      githubUrl: "https://github.com/WiusGH/AluraChallengeConversorDeMonedas",
      techs: ["React", "Typescript", "Java", "Github"],
    },
    {
      title: "Cerrajería Alex",
      description:
        "Sitio web con dominio propio creado para que mi cliente pudiese ofrecer sus servicios.",
      image: converter,
      url: "https://www.cerrajerialex.cl/",
      techs: ["React", "Javascript"],
    },
    {
      title: "GoFit App",
      description: "Plataforma de turnos para clases de fitness.",
      image: converter,
      url: "",
      githubUrl: "https://github.com/WiusGH/Simulacion-c15-React-Python",
      techs: ["React", "Javascript"],
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
