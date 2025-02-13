import { useEffect, useRef, useState } from "react";
import TechCard from "../../cards/TechCard";
import { useLanguage } from "../../contexts/LanguageContext";
import style from "./Stack.module.css";

const Stack = () => {
  const { t } = useLanguage();

  const frontendRef = useRef<HTMLDivElement>(null);
  const backendRef = useRef<HTMLDivElement>(null);
  const databaseRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);

  const frontend = ["HTML", "CSS", "Javascript", "Typescript", "React", "Vite"];
  const backend = ["Python", "Flask", "Java", "Springboot"];
  const database = ["MySQL", "MongoDB", "AWS"];
  const tools = [
    "Git",
    "Github",
    "VSCode",
    "IntelliJ",
    "PyCharm",
    "Render",
    "Vercel",
    "Postman",
    "Insomnia",
  ];

  const [durations, setDurations] = useState({
    frontend: 10,
    backend: 10,
    database: 10,
    tools: 10,
  });

  useEffect(() => {
    const calculateDuration = (ref: React.RefObject<HTMLDivElement>) => {
      if (ref.current) {
        const width = ref.current.scrollWidth;
        const speed = 50; // Adjust this value for a global fixed speed
        return width / speed;
      }
      return 10;
    };

    setDurations({
      frontend: calculateDuration(frontendRef),
      backend: calculateDuration(backendRef),
      database: calculateDuration(databaseRef),
      tools: calculateDuration(toolsRef),
    });
  }, []);

  return (
    <div className={style.stack}>
      <h5>{t("stack")}</h5>

      <h6>Frontend</h6>
      <section
        className={style.slider}
        style={
          { "--duration": `${durations.frontend}s` } as React.CSSProperties
        }
        ref={frontendRef}
      >
        {[...frontend, ...frontend, ...frontend, ...frontend].map(
          (tech, index) => (
            <div className={style.slide} key={index}>
              <TechCard tech={tech} />
            </div>
          )
        )}
      </section>

      <h6>Backend</h6>
      <section
        className={style.slider}
        style={{ "--duration": `${durations.backend}s` } as React.CSSProperties}
        ref={backendRef}
      >
        {[
          ...backend,
          ...backend,
          ...backend,
          ...backend,
          ...backend,
          ...backend,
        ].map((tech, index) => (
          <div className={style.slide} key={index}>
            <TechCard tech={tech} />
          </div>
        ))}
      </section>

      <h6>{t("database")}</h6>
      <section
        className={style.slider}
        style={
          { "--duration": `${durations.database}s` } as React.CSSProperties
        }
        ref={databaseRef}
      >
        {[
          ...database,
          ...database,
          ...database,
          ...database,
          ...database,
          ...database,
        ].map((tech, index) => (
          <div className={style.slide} key={index}>
            <TechCard tech={tech} />
          </div>
        ))}
      </section>

      <h6>{t("tools")}</h6>
      <section
        className={style.slider}
        style={{ "--duration": `${durations.tools}s` } as React.CSSProperties}
        ref={toolsRef}
      >
        {[...tools, ...tools].map((tech, index) => (
          <div className={style.slide} key={index}>
            <TechCard tech={tech} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Stack;
