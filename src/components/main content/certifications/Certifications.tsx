import CertificationCard from "../../cards/CertificationCard";
import style from "./Certifications.module.css";
import poliglota from "../../../assets/screenshots/poliglota.png";

const Certifications = () => {
  const certificationsList = [
    {
      title: "Políglota",
      description: "Certificado de proficiencia en inglés",
      image: poliglota,
      date: "01/12/2023",
      url: "https://drive.google.com/file/d/1uloTLth6mLOS7EJz_IofsPMW8q3ajMIB/view?usp=sharing",
    },
  ];

  return (
    <div className={style.certifications}>
      <h5>Certificaciones</h5>
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
    </div>
  );
};

export default Certifications;
