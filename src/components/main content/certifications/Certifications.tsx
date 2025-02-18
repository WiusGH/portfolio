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
      title: t("alura"),
      image1: g7,
      image2: g72,
      url: "https://drive.google.com/file/d/1LSRO22l_LlIYSQ1QVbLPS1i_K83SCJXY/view?usp=sharing",
    },
    {
      title: t("udc"),
      image1: uc,
      image2: uc,
      url: "https://drive.google.com/file/d/1YrkK3pBlpykxRqJ4WmR1iyMwIckBWVXD/view?usp=sharing",
    },
    {
      title: t("udemyPython"),
      image1: udemyPython,
      image2: udemyPython,
      url: "https://drive.google.com/file/d/15Hs52Vn33HFlnL2jnlCT2RAd1GKlx_Et/view?usp=sharing",
    },
    {
      title: t("udemyWeb"),
      image1: udemyWeb,
      image2: udemyWeb,
      url: "https://drive.google.com/file/d/16vSBQp_GhZMpG1YBIWZ5cNJUpgxGxSlO/view?usp=sharing",
    },
    {
      title: t("possEs"),
      image1: possEs,
      image2: possEs2,
      url: "https://drive.google.com/file/d/1bc-UqNA9jnzS2RSXWyr2nz-kmVkq4tli/view?usp=sharing",
    },
    {
      title: t("possEn"),
      image1: possEn,
      image2: possEn2,
      url: "https://drive.google.com/file/d/1Ry8SdPMCyqGme2Vz8K4-GhYqGfFRjGu1/view?usp=sharing",
    },
    {
      title: t("poliglota"),
      image1: poliglota,
      image2: poliglota,
      url: "https://drive.google.com/file/d/1uloTLth6mLOS7EJz_IofsPMW8q3ajMIB/view?usp=sharing",
    },
    {
      title: t("generation"),
      image1: generation,
      image2: generation,
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
