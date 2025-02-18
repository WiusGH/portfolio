import style from "./Projects.module.css";
import playDom from "../../../assets/screenshots/play-dom.png";
import playDom2 from "../../../assets/screenshots/play-dom2.png";
import sweetCreation from "../../../assets/screenshots/sweet-creation.png";
import sweetCreation2 from "../../../assets/screenshots/sweet-creation2.png";
import betterCommerce from "../../../assets/screenshots/better-commerce.png";
import betterCommerce2 from "../../../assets/screenshots/better-commerce2.png";
import converter from "../../../assets/screenshots/converter.png";
import cerrajeria from "../../../assets/screenshots/cerrajero.png";
import cerrajeria2 from "../../../assets/screenshots/cerrajero2.png";
import goFit from "../../../assets/screenshots/go-fit.png";
import goFit2 from "../../../assets/screenshots/go-fit2.png";
import { useLanguage } from "../../contexts/LanguageContext";
import CustomSwiper from "../../swipers/CustomSwiper";

const Projects = () => {
  const { t } = useLanguage();
  const projectsList = [
    {
      title: "PlayDOM",
      description: t("playDOM"),
      image1: playDom,
      image2: playDom2,
      url: "https://s15-25.onrender.com/",
      githubUrl: "https://github.com/WiusGH/Simulacion-s15-React-PHP",
      techs: ["React", "Vite", "Typescript", "Render"],
    },
    {
      title: "Sweet Creation",
      description: t("sweetCreation"),
      image1: sweetCreation,
      image2: sweetCreation2,
      url: "https://www.sweetcreation.store/",
      techs: ["React", "Vite", "Typescript", "Vercel"],
    },
    {
      title: "Visualizador de productos de un E-commerce",
      description: t("eCommerce"),
      image1: betterCommerce,
      image2: betterCommerce2,
      url: "https://prueba-tecnica-silk.vercel.app/",
      githubUrl: "https://github.com/WiusGH/prueba-tecnica",
      techs: ["React", "Typescript", "Material UI", "Vercel"],
    },
    {
      title: "Conversor de monedas de Alura",
      description: t("converter"),
      image1: converter,
      image2: converter,
      url: "https://wiusgh.github.io/AluraChallengeConversorDeMonedas/",
      githubUrl: "https://github.com/WiusGH/AluraChallengeConversorDeMonedas",
      techs: ["React", "Typescript", "Java", "Github"],
    },
    {
      title: "Cerrajería Alex",
      description: t("cerrajeria"),
      image1: cerrajeria,
      image2: cerrajeria2,
      url: "https://www.cerrajerialex.cl/",
      techs: ["React", "Javascript"],
    },
    {
      title: "GoFit App",
      description: t("goFit"),
      image1: goFit,
      image2: goFit2,
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
