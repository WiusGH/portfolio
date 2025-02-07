import { useState, useEffect, useCallback, useRef } from "react";
import style from "./Header.module.css";
import ThemeToggle from "../buttons/ThemeToggle";
import LanguageToggle from "../buttons/LanguageToggle";
import { useLanguage } from "../contexts/LanguageContext";
import useScreenSize from "../hooks/useScreenSize";
import { GiHamburgerMenu } from "react-icons/gi";

interface HeaderProps {
  scrollToSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const { t } = useLanguage();
  const mainRef = useRef<HTMLElement | null>(null);
  const isSmallScreen = useScreenSize(768);

  useEffect(() => {
    mainRef.current = document.querySelector("main");
  }, []);

  const getInitialTheme = (): "light" | "dark" => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) return savedTheme;

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  };

  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleScroll = useCallback(() => {
    const scrollElement = mainRef.current || document.documentElement; // Use document if main isn't scrolling
    const currentScroll = scrollElement.scrollTop;

    if (currentScroll > lastScroll && currentScroll > 100) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setLastScroll(currentScroll);
  }, [lastScroll]);

  useEffect(() => {
    if (!mainRef.current) return;

    const mainElement = mainRef.current;
    mainElement.addEventListener("scroll", handleScroll);

    return () => mainElement.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <header
      className={`${isSmallScreen ? style.mobileHeader : style.header} ${
        visible ? style.visible : style.hidden
      }`}
    >
      {isSmallScreen ? (
        <>
          <section className={style.buttons}>
            <LanguageToggle />
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </section>
          <nav className={`${style.mobileNav} ${menuOpen ? style.open : ""}`}>
            <ul>
              <li onClick={() => scrollToSection("about")}>{t("about")}</li>
              <hr />
              <li onClick={() => scrollToSection("stack")}>{t("stack")}</li>
              <hr />
              <li onClick={() => scrollToSection("projects")}>
                {t("projects")}
              </li>
              <hr />
              <li onClick={() => scrollToSection("certifications")}>
                {t("certifications")}
              </li>
            </ul>
          </nav>
          <GiHamburgerMenu
            className={style.hamburger}
            onClick={() => setMenuOpen((prev) => !prev)}
          />
        </>
      ) : (
        <>
          <nav>
            <ul>
              <li onClick={() => scrollToSection("about")}>{t("about")}</li>
              <li onClick={() => scrollToSection("stack")}>{t("stack")}</li>
              <li onClick={() => scrollToSection("projects")}>
                {t("projects")}
              </li>
              <li onClick={() => scrollToSection("certifications")}>
                {t("certifications")}
              </li>
            </ul>
          </nav>
          <LanguageToggle />
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </>
      )}
    </header>
  );
};

export default Header;
