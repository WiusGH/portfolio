import { useLanguage } from "../contexts/LanguageContext";
import style from "./LanguageToggle.module.css";
import spain from "../../assets/images/Spain.svg";
import uk from "../../assets/images/UK.svg";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage(); // Get language state from context

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es"); // Update global state
  };

  return (
    <button
      className={`${style.languageToggle} ${
        language === "en" ? style.englishBg : ""
      }`}
      onClick={toggleLanguage}
    >
      <div className={style.iconContainer}>
        <img
          className={`${style.flagIcon} ${
            language === "en" ? "" : style.hidden
          }`}
          src={uk}
          alt="English flag"
        />
        <img
          className={`${style.flagIcon} ${
            language === "es" ? "" : style.hidden
          }`}
          src={spain}
          alt="Spanish flag"
        />
      </div>
      <div
        className={`${style.toggle} ${language === "en" ? style.english : ""}`}
      />
    </button>
  );
};

export default LanguageToggle;
