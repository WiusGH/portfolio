import style from "./Projects.module.css";
import playDom from "../../../assets/screenshots/play-dom.png";
import sweetCreation from "../../../assets/screenshots/sweet-creation.png";
import betterCommerce from "../../../assets/screenshots/better-commerce.png";
import converter from "../../../assets/screenshots/converter.png";
import cerrajeria from "../../../assets/screenshots/cerrajero.png";
import { useLanguage } from "../../contexts/LanguageContext";
import CustomSwiper from "../../swipers/CustomSwiper";

const Projects = () => {
  const { t } = useLanguage();
  const projectsList = [
    {
      title: "PlayDOM",
      description: t("playDOM"),
      image: playDom,
      url: "https://s15-25.onrender.com/",
      githubUrl: "https://github.com/WiusGH/Simulacion-s15-React-PHP",
      techs: ["React", "Vite", "Typescript", "Render"],
    },
    {
      title: "Sweet Creation",
      description: t("sweetCreation"),
      image: sweetCreation,
      url: "https://www.sweetcreation.store/",
      techs: ["React", "Vite", "Typescript", "Vercel"],
    },
    {
      title: "Visualizador de productos de un E-commerce",
      description: t("eCommerce"),
      image: betterCommerce,
      url: "https://prueba-tecnica-silk.vercel.app/",
      githubUrl: "https://github.com/WiusGH/prueba-tecnica",
      techs: ["React", "Typescript", "Material UI", "Vercel"],
    },
    {
      title: "Conversor de monedas de Alura",
      description: t("converter"),
      image: converter,
      url: "https://wiusgh.github.io/AluraChallengeConversorDeMonedas/",
      githubUrl: "https://github.com/WiusGH/AluraChallengeConversorDeMonedas",
      techs: ["React", "Typescript", "Java", "Github"],
    },
    {
      title: "Cerrajería Alex",
      description: t("cerrajeria"),
      image: cerrajeria,
      url: "https://www.cerrajerialex.cl/",
      techs: ["React", "Javascript"],
    },
    {
      title: "GoFit App",
      description: t("goFit"),
      image: converter,
      url: "",
      githubUrl: "https://github.com/WiusGH/Simulacion-c15-React-Python",
      techs: ["React", "Javascript"],
    },
  ];

  return (
    <div className={style.projects}>
      <h5>{t("projects")}</h5>
      <section className={style.projectList}>
        <CustomSwiper itemsList={projectsList} projects />
      </section>
    </div>
  );
};

export default Projects;
