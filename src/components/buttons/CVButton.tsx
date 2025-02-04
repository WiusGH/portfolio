import style from "./CVButton.module.css";
import cv from "../../assets/CV Wilsconidel.pdf";
import { useLanguage } from "../contexts/LanguageContext";

const CVButton = () => {
  const { t } = useLanguage();
  return (
    <a className={style.CVButton} href={cv} download="CV Wilsconidel">
      📄 {t("downloadCV")}
    </a>
  );
};

export default CVButton;
