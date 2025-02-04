import style from "./CertificationCard.module.css";
import { useLanguage } from "../contexts/LanguageContext";

interface CertificationCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  url: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  description,
  image,
  date,
  url,
}) => {
  const { t } = useLanguage();
  return (
    <div className={style.certificationCard}>
      <h6>{title}</h6>
      <img src={image} alt={title} />
      <p>{description}</p>
      <p>
        {t("date")}: {date}
      </p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <p>{t("seeCertification")}</p>
      </a>
    </div>
  );
};

export default CertificationCard;
