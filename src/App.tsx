import React, { useState, useEffect, useRef } from "react";
import useScreenSize from "./components/hooks/useScreenSize";
import { MdOutlineDoubleArrow } from "react-icons/md";
import ProfileInfo from "./components/sidebar content/ProfileInfo";
import AboutMe from "./components/main content/about me/AboutMe";
// import ProfileSection from "./components/containers/ProfileSection";
import Stack from "./components/main content/stack/Stack";
import Projects from "./components/main content/projects/Projects";
import Certifications from "./components/main content/certifications/Certifications";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
// import FullPageSection from "./components/containers/FullPageSection";

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const isSmallScreen = useScreenSize(768);

  const aboutRef = useRef<HTMLElement | null>(null);
  const stackRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const certificationsRef = useRef<HTMLElement | null>(null);

  // const sections = [
  //   <Header />,
  //   <AboutMe />,
  //   <Stack />,
  //   <Projects />,
  //   <Certifications />,
  // ];

  // const titles = [
  //   "Header",
  //   "Sobre mi",
  //   "Stack",
  //   "Proyectos",
  //   "Certificaciones",
  // ];

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

  useEffect(() => {
    setTimeout(() => {
      setSidebarOpen(false);
    }, 500);
  }, []);

  return (
    <div className="layout">
      <aside
        ref={sidebarRef}
        className={`sidebar ${sidebarOpen ? "open" : ""}`}
      >
        {isSmallScreen && (
          <section className="sidebar-toggle" onClick={toggleSidebar}>
            <MdOutlineDoubleArrow
              className={`arrow-icon ${sidebarOpen ? "open" : ""}`}
            />
          </section>
        )}
        <ProfileInfo />
      </aside>

      <main className="main-content">
        {/* <FullPageSection titles={titles}>{sections}</FullPageSection> */}
        <Header
          scrollToSection={(section: string) => {
            const sections: Record<string, React.RefObject<HTMLElement>> = {
              about: aboutRef,
              stack: stackRef,
              projects: projectsRef,
              certifications: certificationsRef,
            };
            sections[section]?.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        />
        <section ref={aboutRef}>
          <AboutMe />
        </section>
        <section ref={stackRef}>
          <Stack />
        </section>
        <section ref={projectsRef}>
          <Projects />
        </section>
        <section ref={certificationsRef}>
          <Certifications />
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default App;
