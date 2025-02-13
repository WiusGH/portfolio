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
        const speed = 30;
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
      <div className={style.sliderContainer}>
        <section
          className={style.slider}
          style={{
            animationDuration: `${durations.frontend}s`,
          }}
          ref={frontendRef}
        >
          {frontend.map((tech, index) => (
            <div className={style.slide} key={index}>
              <TechCard tech={tech} />
            </div>
          ))}
        </section>
      </div>
      <h6>Backend</h6>
      <div className={style.sliderContainer}>
        <section
          className={style.slider}
          style={{
            animationDuration: `${durations.backend}s`,
          }}
          ref={backendRef}
        >
          {backend.map((tech, index) => (
            <div className={style.slide} key={index}>
              <TechCard tech={tech} />
            </div>
          ))}
        </section>
      </div>
      <h6>{t("database")}</h6>
      <div className={style.sliderContainer}>
        <section
          className={style.slider}
          style={{
            animationDuration: `${durations.database}s`,
          }}
          ref={databaseRef}
        >
          {database.map((tech, index) => (
            <div className={style.slide} key={index}>
              <TechCard tech={tech} />
            </div>
          ))}
        </section>
      </div>
      <h6>{t("tools")}</h6>
      <div className={style.sliderContainer}>
        <section
          className={style.slider}
          style={{
            animationDuration: `${durations.tools}s`,
          }}
          ref={toolsRef}
        >
          {tools.map((tech, index) => (
            <div className={style.slide} key={index}>
              <TechCard tech={tech} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Stack;
