import React from "react";
import style from "./ProfileSection.module.css";

interface ProfileSectionProps {
  children: React.ReactNode;
}

const ProfileSection = React.forwardRef<HTMLElement, ProfileSectionProps>(
  ({ children }, ref) => {
    return (
      <section className={style.profileSection} ref={ref}>
        {children}
      </section>
    );
  }
);

export default ProfileSection;
