import style from "./Footer.module.css";
import { useLanguage } from "../contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className={style.footer}>
      &copy; 2025 - {t("allRightsReserved")}
    </footer>
  );
};

export default Footer;
