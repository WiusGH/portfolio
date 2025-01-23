import style from "./ProfileSection.module.css";

interface ProfileSectionProps {
  children: React.ReactNode;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ children }) => {
  return <div className={style.profileSection}>{children}</div>;
};

export default ProfileSection;
