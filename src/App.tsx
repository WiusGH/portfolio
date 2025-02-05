import React, { useState, useEffect, useRef } from "react";
import useScreenSize from "./components/hooks/useScreenSize";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import ProfileInfo from "./components/sidebar content/ProfileInfo";
import AboutMe from "./components/main content/about me/AboutMe";
// import ProfileSection from "./components/containers/ProfileSection";
import Stack from "./components/main content/stack/Stack";
import Projects from "./components/main content/projects/Projects";
import Certifications from "./components/main content/certifications/Certifications";
import Header from "./components/layout/Header";
import ProfileSection from "./components/containers/ProfileSection";
// import FullPageSection from "./components/containers/FullPageSection";

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
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

  return (
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
        <ProfileSection ref={aboutRef}>
          <AboutMe />
        </ProfileSection>
        <ProfileSection ref={stackRef}>
          <Stack />
        </ProfileSection>
        <ProfileSection ref={projectsRef}>
          <Projects />
        </ProfileSection>
        <ProfileSection ref={certificationsRef}>
          <Certifications />
        </ProfileSection>
      </main>
    </div>
  );
};

export default App;
