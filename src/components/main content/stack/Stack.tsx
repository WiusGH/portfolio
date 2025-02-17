import { useEffect, useRef, useState } from "react";
import TechCard from "../../cards/TechCard";
import { useLanguage } from "../../contexts/LanguageContext";
import style from "./Stack.module.css";

const Stack = () => {
  const { t } = useLanguage();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [animationDistance, setAnimationDistance] = useState("100%");

  const techStack = [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "React",
    "Vite",
    "Python",
    "Flask",
    "Java",
    "Springboot",
    "MySQL",
    "MongoDB",
    "AWS",
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

  useEffect(() => {
    if (sliderRef.current) {
      const sliderWidth = sliderRef.current.scrollWidth;
      setAnimationDistance(`-${sliderWidth}px`);
    }
  }, []);

  return (
    <div className={style.stack}>
      <h5>{t("stack")}</h5>
      <div className={style.sliderContainer}>
        <div
          className={style.slider}
          style={
            { "--animation-distance": animationDistance } as React.CSSProperties
          }
          ref={sliderRef}
        >
          {[...techStack, ...techStack].map(
            (
              tech,
              index // Duplicate for seamless scrolling
            ) => (
              <div className={style.slide} key={index}>
                <TechCard tech={tech} />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Stack;
