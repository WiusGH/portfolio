import React, { useState, useEffect, useRef } from "react";
import useScreenSize from "./components/hooks/useScreenSize";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import ProfileInfo from "./components/sidebar content/ProfileInfo";
import AboutMe from "./components/main content/about me/AboutMe";
import ProfileSection from "./components/containers/ProfileSection";
import Stack from "./components/main content/stack/Stack";

const App: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const isSmallScreen = useScreenSize(768);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        closeSidebar();
      }
    };

    if (sidebarOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [sidebarOpen]);

  return (
    <div>
      <div className="layout">
        <aside
          ref={sidebarRef}
          className={`sidebar ${sidebarOpen ? "open" : ""}`}
        >
          {isSmallScreen && (
            <section className="sidebar-toggle" onClick={toggleSidebar}>
              <IoIosArrowDroprightCircle
                className={`arrow-icon ${sidebarOpen ? "open" : ""}`}
              />
            </section>
          )}
          <ProfileInfo />
        </aside>

        <main className="main-content">
          <div className="header">
            <button onClick={toggleTheme}>
              {theme === "light"
                ? "Switch to Dark Mode"
                : "Switch to Light Mode"}
            </button>
            <ProfileSection children={<AboutMe />} />
            <ProfileSection children={<Stack />} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
