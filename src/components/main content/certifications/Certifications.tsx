import CertificationCard from "../../cards/CertificationCard";
import style from "./Certifications.module.css";
import poliglota from "../../../assets/screenshots/poliglota.png";
import g7 from "../../../assets/screenshots/g7.png";
import uc from "../../../assets/screenshots/uc.png";
import udemyPython from "../../../assets/screenshots/udemy-python.png";
import udemyWeb from "../../../assets/screenshots/udemy-web.png";
import generation from "../../../assets/screenshots/generation.png";
import possEs from "../../../assets/screenshots/poss-es.png";
import possEn from "../../../assets/screenshots/poss-en.png";
import { useLanguage } from "../../contexts/LanguageContext";

const Certifications = () => {
  const { t } = useLanguage();
  const certificationsList = [
    {
      title: "Políglota",
      description: t("poliglota"),
      image: poliglota,
      date: "01/12/2023",
      url: "https://drive.google.com/file/d/1uloTLth6mLOS7EJz_IofsPMW8q3ajMIB/view?usp=sharing",
    },
    {
      title: "Oracle Next Generation G7",
      description: t("alura"),
      image: g7,
      date: "12/01/2025",
      url: "",
    },
    {
      title: "Universidad de Chile",
      description: t("udc"),
      image: uc,
      date: "11/07/2024",
      url: "",
    },
    {
      title: "Python Pro bootcamp",
      description: t("udemyPython"),
      image: udemyPython,
      date: "24/06/2024",
      url: "",
    },
    {
      title: "Web development bootcamp",
      description: t("udemyWeb"),
      image: udemyWeb,
      date: "24/06/2024",
      url: "",
    },
    {
      title: "Desarrollo full stack Java",
      description: t("generation"),
      image: generation,
      date: "01/11/2023",
      url: "",
    },
    {
      title: "Proof of soft skills en español",
      description: t("poss"),
      image: possEs,
      date: "01/06/2024",
      url: "",
    },
    {
      title: "Proof of soft skills en inglés",
      description: t("poss"),
      image: possEn,
      date: "01/06/2024",
      url: "",
    },
  ];

  return (
    <div className={style.certifications}>
      <h5>{t("certifications")}</h5>
      <section className={style.certificationsList}>
        {certificationsList.map((certification) => (
          <CertificationCard
            key={certification.title}
            title={certification.title}
            description={certification.description}
            image={certification.image}
            date={certification.date}
            url={certification.url}
          />
        ))}
      </section>
    </div>
  );
};

export default Certifications;
