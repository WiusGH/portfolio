import { useState } from "react";
import style from "./Header.module.css";

const Header = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className={style.header}>
      <ul>
        <li>Sobre mí</li>
        <li>Stack</li>
        <li>Proyectos</li>
        <li>Certificados</li>
      </ul>
      <button className={style.themeButton} onClick={toggleTheme}>
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </div>
  );
};

export default Header;
