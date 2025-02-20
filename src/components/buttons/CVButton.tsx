import style from "./CVButton.module.css";
import cv from "../../assets/CV Wilsconidel.pdf";
import cvEn from "../../assets/CV Wilsconidel english.pdf";
import { useLanguage } from "../contexts/LanguageContext";

const CVButton = () => {
  const { language, t } = useLanguage();
  return (
    <a
      className={style.CVButton}
      href={language === "en" ? cvEn : cv}
      download="CV Wilsconidel"
    >
      <div className={style.icon}>📄</div> {t("downloadCV")}
    </a>
  );
};

export default CVButton;
