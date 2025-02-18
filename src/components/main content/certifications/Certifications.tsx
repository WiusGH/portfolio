import style from "./Certifications.module.css";
import poliglota from "../../../assets/screenshots/poliglota.png";
import g7 from "../../../assets/screenshots/g7.png";
import g72 from "../../../assets/screenshots/g72.png";
import uc from "../../../assets/screenshots/uc.png";
import udemyPython from "../../../assets/screenshots/udemy-python.png";
import udemyWeb from "../../../assets/screenshots/udemy-web.png";
import generation from "../../../assets/screenshots/generation.png";
import possEs from "../../../assets/screenshots/poss-es.png";
import possEs2 from "../../../assets/screenshots/poss-es2.png";
import possEn from "../../../assets/screenshots/poss-en.png";
import possEn2 from "../../../assets/screenshots/poss-en2.png";
import { useLanguage } from "../../contexts/LanguageContext";
import CustomSwiper from "../../swipers/CustomSwiper";

const Certifications = () => {
  const { t } = useLanguage();
  const certificationsList = [
    {
      title: "Oracle Next Generation G7",
      description: t("alura"),
      image1: g7,
      image2: g72,
      date: "12/01/2025",
      url: "https://drive.google.com/file/d/1LSRO22l_LlIYSQ1QVbLPS1i_K83SCJXY/view?usp=sharing",
    },
    {
      title: "Universidad de Chile",
      description: t("udc"),
      image1: uc,
      image2: uc,
      date: "11/07/2024",
      url: "https://drive.google.com/file/d/1YrkK3pBlpykxRqJ4WmR1iyMwIckBWVXD/view?usp=sharing",
    },
    {
      title: "Python Pro bootcamp",
      description: t("udemyPython"),
      image1: udemyPython,
      image2: udemyPython,
      date: "24/06/2024",
      url: "https://drive.google.com/file/d/15Hs52Vn33HFlnL2jnlCT2RAd1GKlx_Et/view?usp=sharing",
    },
    {
      title: "Web development bootcamp",
      description: t("udemyWeb"),
      image1: udemyWeb,
      image2: udemyWeb,
      date: "24/06/2024",
      url: "https://drive.google.com/file/d/16vSBQp_GhZMpG1YBIWZ5cNJUpgxGxSlO/view?usp=sharing",
    },
    {
      title: "Proof of soft skills en español",
      description: t("poss"),
      image1: possEs,
      image2: possEs2,
      date: "01/06/2024",
      url: "https://drive.google.com/file/d/1bc-UqNA9jnzS2RSXWyr2nz-kmVkq4tli/view?usp=sharing",
    },
    {
      title: "Proof of soft skills en inglés",
      description: t("poss"),
      image1: possEn,
      image2: possEn2,
      date: "01/06/2024",
      url: "https://drive.google.com/file/d/1Ry8SdPMCyqGme2Vz8K4-GhYqGfFRjGu1/view?usp=sharing",
    },
    {
      title: "Políglota",
      description: t("poliglota"),
      image1: poliglota,
      image2: poliglota,
      date: "01/12/2023",
      url: "https://drive.google.com/file/d/1uloTLth6mLOS7EJz_IofsPMW8q3ajMIB/view?usp=sharing",
    },
    {
      title: "Desarrollo full stack Java",
      description: t("generation"),
      image1: generation,
      image2: generation,
      date: "01/11/2023",
      url: "https://drive.google.com/file/d/1yEGUcjGSLfGAK50t9wRfIjnzPwfSL-bi/view?usp=sharing",
    },
  ];

  return (
    <div className={style.certifications}>
      <h5>{t("certifications")}</h5>
      <section className={style.certificationsList}>
        <CustomSwiper itemsList={certificationsList} />
      </section>
    </div>
  );
};

export default Certifications;
