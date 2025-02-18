import style from "./CertificationCard.module.css";
import { useLanguage } from "../contexts/LanguageContext";
import { LuExternalLink } from "react-icons/lu";

interface CertificationCardProps {
  title: string;
  image1: string;
  image2: string;
  url: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  image1,
  image2,
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
      <a
        className={style.link}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <p>{t("seeCertification")}</p>
          <LuExternalLink />
        </div>
      </a>
    </div>
  );
};

export default CertificationCard;
