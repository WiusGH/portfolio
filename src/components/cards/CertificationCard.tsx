import style from "./CertificationCard.module.css";

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
  return (
    <div className={style.certificationCard}>
      <h6>{title}</h6>
      <img src={image} alt={title} />
      <p>{description}</p>
      <p>Fecha: {date}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <p>Ver certificación</p>
      </a>
    </div>
  );
};

export default CertificationCard;
