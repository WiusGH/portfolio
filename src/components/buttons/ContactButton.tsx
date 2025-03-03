import React from "react";
import styles from "./ContactButton.module.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

interface ContactButtonProps {
  type: "GitHub" | "LinkedIn" | "Email" | "WhatsApp";
}

const ContactButton: React.FC<ContactButtonProps> = ({ type }) => {
  const contactInfo = {
    GitHub: {
      url: "https://github.com/WiusGH",
      icon: <FaGithub />,
    },
    LinkedIn: {
      url: "https://www.linkedin.com/in/wius/",
      borderColor: "#0077b5",
      icon: <FaLinkedin color="#0077b5" />,
    },
    Email: {
      url: "mailto:wius93@gmail.com",
      borderColor: "#ff6600",
      icon: <FaEnvelope color="#ff6600" />,
    },
    WhatsApp: {
      url: "https://wa.me/56935448591",
      icon: <FaWhatsapp color="#25D366" />,
    },
  };

  const { url, icon } = contactInfo[type];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.button} ${styles[type]}`}
    >
      {icon} {type}
    </a>
  );
};

export default ContactButton;
