import style from "./ProfileInfo.module.css";
import profilePic from "../../assets/prof-pic.png";
import ContactButton from "../buttons/ContactButton";
import CVButton from "../buttons/CVButton";

const ProfileInfo = () => {
  return (
    <div className={style.profileInfo}>
      <section className={style.imageWrapper}>
        <img src={profilePic} alt="Profile" className={style.profilePic} />
      </section>
      <section>
        <h1>Wilscónidel Yánez</h1>
        <h3>Desarrollador full stack</h3>
      </section>
      <section>
        <h4>Dirección:</h4>
        <p>Pasaje Cinco 5414, San Miguel - Región Metropolitana</p>
      </section>
      <section>
        <h4>Contacto:</h4>
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
