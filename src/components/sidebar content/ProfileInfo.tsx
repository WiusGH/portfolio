import style from "./ProfileInfo.module.css";
import profilePic from "../../assets/prof-pic.png";

const ProfileInfo = () => {
  return (
    <div>
      <div className={style.imageWrapper}>
        <img src={profilePic} alt="Profile" className={style.profilePic} />
      </div>
      <h1>Wilscónidel Yánez</h1>
      <h3>Desarrollador full stack</h3>
      <h4>Dirección:</h4>
      <p>Pasaje Cinco 5414, San Miguel - Región Metropolitana</p>
      <h4>Contacto:</h4>
      <p>
        <a
          href="mailto:wius93@gmail"
          target="_blanck"
          rel="noopener noreferrer"
        >
          wius93@gmail.com
        </a>
      </p>
      <p>
        <a
          href="https://wa.me/56935448591"
          target="_blanck"
          rel="noopener noreferrer"
        >
          +56 9 3544 8591
        </a>
      </p>
      <h4>Redes:</h4>
      <p>
        <a
          href="https://www.linkedin.com/in/wius/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
      <p>
        <a
          href="https://github.com/WiusGH"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </p>
    </div>
  );
};

export default ProfileInfo;
