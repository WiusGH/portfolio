import React, { useState, useEffect, useRef } from "react";
import useScreenSize from "./components/hooks/useScreenSize";
import { IoIosArrowDroprightCircle } from "react-icons/io";

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
          Sidebar Content
          {isSmallScreen && (
            <section className="sidebar-toggle" onClick={toggleSidebar}>
              <IoIosArrowDroprightCircle
                className={`arrow-icon ${sidebarOpen ? "open" : ""}`}
              />
            </section>
          )}
        </aside>
        <main className="main-content">
          <div className="header">
            <button onClick={toggleTheme}>
              {theme === "light"
                ? "Switch to Dark Mode"
                : "Switch to Light Mode"}
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
