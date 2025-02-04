import style from "./AboutMe.module.css";
import { useLanguage } from "../../contexts/LanguageContext";

const AboutMe = () => {
  const { t } = useLanguage();
  return (
    <div className={style.aboutMe}>
      <h5>{t("about")}</h5>
      <p>{t("bio")}</p>
    </div>
  );
};

export default AboutMe;
