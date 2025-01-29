import CertificationCard from "../../cards/CertificationCard";
import style from "./Certifications.module.css";
import poliglota from "../../../assets/screenshots/poliglota.png";
import g7 from "../../../assets/screenshots/g7.png";
import uc from "../../../assets/screenshots/uc.png";
import udemyPython from "../../../assets/screenshots/udemy-python.png";
import udemyWeb from "../../../assets/screenshots/udemy-web.png";
import generation from "../../../assets/screenshots/generation.png";

const Certifications = () => {
  const certificationsList = [
    {
      title: "Políglota",
      description: "Certificado de proficiencia en inglés",
      image: poliglota,
      date: "01/12/2023",
      url: "https://drive.google.com/file/d/1uloTLth6mLOS7EJz_IofsPMW8q3ajMIB/view?usp=sharing",
    },
    {
      title: "Oracle Next Generation G7",
      description: "Certificado Finalización de formación backend",
      image: g7,
      date: "12/01/2025",
      url: "",
    },
    {
      title: "Universidad de Chile",
      description: "Introducción a la programación con Python",
      image: uc,
      date: "11/07/2024",
      url: "",
    },
    {
      title: "Python Pro bootcamp",
      description: "Certificado de completación de curso de Python de Udemy",
      image: udemyPython,
      date: "24/06/2024",
      url: "",
    },
    {
      title: "Web development bootcamp",
      description:
        "Certificado de completación de curso de desarrollo web de Udemy",
      image: udemyWeb,
      date: "24/06/2024",
      url: "",
    },
    {
      title: "Desarrollo full stack Java",
      description: "Certificado Finalización de Generation Chile",
      image: generation,
      date: "01/11/2023",
      url: "",
    },
  ];

  return (
    <div className={style.certifications}>
      <h5>Certificaciones</h5>
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
