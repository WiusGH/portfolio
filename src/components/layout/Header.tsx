import { useState, useEffect, useCallback } from "react";
import style from "./Header.module.css";
import ThemeToggle from "../buttons/ThemeToggle";

interface HeaderProps {
  scrollToSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

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

  const handleScroll = useCallback(() => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll && currentScroll > 100) {
      setVisible(false); // User is scrolling down
    } else {
      setVisible(true); // User is scrolling up
    }

    setLastScroll(currentScroll);
  }, [lastScroll]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <nav
      className={`${style.header} ${visible ? style.visible : style.hidden}`}
    >
      <ul>
        <li>
          <button onClick={() => scrollToSection("about")}>Sobre mí</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("stack")}>Stack</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("projects")}>Proyectos</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("certifications")}>
            Certificados
          </button>
        </li>
      </ul>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </nav>
  );
};

export default Header;
