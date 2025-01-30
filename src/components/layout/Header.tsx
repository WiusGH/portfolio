import { useState } from "react";
import style from "./Header.module.css";
import ThemeToggle from "../buttons/ThemeToggle";

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
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
};

export default Header;
