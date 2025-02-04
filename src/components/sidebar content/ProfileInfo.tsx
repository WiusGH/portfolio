import style from "./ProfileInfo.module.css";
import profilePic from "../../assets/prof-pic.png";
import ContactButton from "../buttons/ContactButton";
import CVButton from "../buttons/CVButton";
import { useLanguage } from "../contexts/LanguageContext";

const ProfileInfo = () => {
  const { t } = useLanguage();
  return (
    <div className={style.profileInfo}>
      <section className={style.imageWrapper}>
        <img src={profilePic} alt="Profile" className={style.profilePic} />
      </section>
      <section>
        <h1>Wilscónidel Yánez</h1>
        <h3>{t("title")}</h3>
      </section>
      <section>
        <h4>{t("address")}:</h4>
        <p>Pasaje Cinco 5414, San Miguel - Región Metropolitana</p>
      </section>
      <section>
        <h4>{t("contact")}:</h4>
        <ContactButton type="GitHub" />
        <ContactButton type="LinkedIn" />
        <ContactButton type="Email" />
        <ContactButton type="WhatsApp" />
        <CVButton />
      </section>
    </div>
  );
};

export default ProfileInfo;
