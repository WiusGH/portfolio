import { useState, useEffect } from "react";
import style from "./Header.module.css";
import ThemeToggle from "../buttons/ThemeToggle";

const Header = () => {
  const getInitialTheme = (): "light" | "dark" => {
    // Check if the user has a saved theme in localStorage
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) return savedTheme;

    // Detect system preference
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  };

  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    // Apply the selected theme to the document
    document.documentElement.setAttribute("data-theme", theme);
    // Save theme choice to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
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
