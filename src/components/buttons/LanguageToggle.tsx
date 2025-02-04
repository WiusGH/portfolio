import { useState } from "react";
import style from "./LanguageToggle.module.css";
import spain from "../../assets/images/Spain.svg";
import uk from "../../assets/images/UK.svg";

const LanguageToggle = () => {
  const [language, setLanguage] = useState("es");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
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
            language !== "es" ? "" : style.hidden
          }`}
          src={spain}
          alt="Spanish flag"
        />

        <img
          className={`${style.flagIcon} ${
            language !== "en" ? "" : style.hidden
          }`}
          src={uk}
          alt="English flag"
        />
      </div>
      <div
        className={`${style.toggle} ${language === "en" ? style.english : ""}`}
      />
    </button>
  );
};

export default LanguageToggle;
