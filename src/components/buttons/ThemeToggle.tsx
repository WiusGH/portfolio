import React from "react";
import style from "./ThemeToggle.module.css";
import { Moon, Sun } from "lucide-react"; // Install 'lucide-react' for icons

interface ThemeToggleProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <button
      className={`${style.themeToggle} ${theme === "dark" ? style.darkBg : ""}`}
      onClick={toggleTheme}
    >
      <div className={style.iconContainer}>
        <Sun
          className={`${style.sunIcon} ${
            theme === "light" ? style.hidden : ""
          }`}
        />
        <Moon
          className={`${style.moonIcon} ${
            theme === "dark" ? style.hidden : ""
          }`}
        />
      </div>
      <div
        className={`${style.toggle} ${theme === "dark" ? style.dark : ""}`}
      />
    </button>
  );
};

export default ThemeToggle;
