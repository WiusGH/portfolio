import style from "./ProfileInfo.module.css";
import profilePic from "../../assets/prof-pic.png";
import ContactButton from "../buttons/ContactButton";
import CVButton from "../buttons/CVButton";
import { useLanguage } from "../contexts/LanguageContext";

const ProfileInfo = () => {
  const { t } = useLanguage();
  return (
    <div className={style.profileInfo}>
      <section className={style.image}>
        <img src={profilePic} alt="Profile" className={style.profilePic} />
      </section>
      <section className={style.title}>
        <h1>Wilscónidel Yánez</h1>
        <h3>{t("title")}</h3>
      </section>
      <section className={style.address}>
        <h4>{t("address")}:</h4>
        <p>Pasaje Cinco 5414, San Miguel, Región Metropolitana, Chile</p>
      </section>
      <section className={style.contact}>
        <h4>{t("contact")}:</h4>
        <ContactButton type="GitHub" />
        <ContactButton type="LinkedIn" />
        <ContactButton type="Email" />
        <ContactButton type="WhatsApp" />
        <h4 className={style.cv}>CV:</h4>
        <CVButton />
      </section>
    </div>
  );
};

export default ProfileInfo;
