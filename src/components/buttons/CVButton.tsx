import style from "./CVButton.module.css";
import cv from "../../assets/CV Wilsconidel.pdf";

const CVButton = () => {
  return (
    <a className={style.CVButton} href={cv} download="CV Wilsconidel">
      📄 Descargar portafolio
    </a>
  );
};

export default CVButton;
