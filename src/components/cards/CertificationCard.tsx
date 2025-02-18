import style from "./CertificationCard.module.css";
import { useLanguage } from "../contexts/LanguageContext";
import { IoIosGlobe } from "react-icons/io";

interface CertificationCardProps {
  title: string;
  description: string;
  image1: string;
  image2: string;
  date: string;
  url: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  description,
  image1,
  image2,
  date,
  url,
}) => {
  const { t } = useLanguage();
  return (
    <div className={style.certificationCard}>
      <h6 className={style.title}>{title}</h6>
      <div className={style.imagesContainer}>
        <img className={style.image} src={image1} alt={title} />
        <img className={style.image} src={image2} alt={title} />
      </div>
      <p className={style.description}>{description}</p>
      <p className={style.date}>
        {t("date")}: {date}
      </p>
      <a
        className={style.link}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>
          <IoIosGlobe />

          <p>{t("seeCertification")}</p>
        </span>
      </a>
    </div>
  );
};

export default CertificationCard;
