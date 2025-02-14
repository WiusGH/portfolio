import React from "react";
import style from "./ProfileSection.module.css";

interface ProfileSectionProps {
  children: React.ReactNode;
  noPadding?: boolean;
}

const ProfileSection = React.forwardRef<HTMLElement, ProfileSectionProps>(
  ({ children, noPadding = false }, ref) => {
    return (
      <section
        className={`${style.profileSection} ${noPadding && style.noPadding}`}
        ref={ref}
      >
        {children}
      </section>
    );
  }
);

export default ProfileSection;
