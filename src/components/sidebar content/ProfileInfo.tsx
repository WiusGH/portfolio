import style from "./ProfileInfo.module.css";
import profilePic from "../../assets/prof-pic.png";

const ProfileInfo = () => {
  return (
    <div>
      <div className={style.imageWrapper}>
        <img src={profilePic} alt="Profile" className={style.profilePic} />
      </div>
      <h1>Wilsconidel Yanez</h1>
      <h3>Desarrollador full stack</h3>
      <h4>Direccion:</h4>
      <p>Pasaje Cinco 5414, San Miguel - Región Metropolitana</p>
      <h4>Contacto:</h4>
      <p>wius93@gmail.com</p>
      <p>+56 9 3544 8591</p>
      <h4>Redes:</h4>
      <a
        href="https://www.linkedin.com/in/wius/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/WiusGH"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
    </div>
  );
};

export default ProfileInfo;
