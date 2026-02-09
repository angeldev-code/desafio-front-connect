import React from "react";
import logo from "../../assets/logo.png";
import whatsapp from "../../assets/whatsapp.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import styles from "./Footer.module.scss"; // Ajustado para o nome real do seu arquivo

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerBrand}>
        <img src={logo} alt="Logo Connect" />
        <span className={styles.brandName}>Connect</span>
      </div>

      <div className={styles.footerInfo}>
        <p>© 2026 Vai na Web & Empower. Todos os direitos reservados.</p>
        <p>Projeto destinado exclusivamente a fins educativos.</p>
      </div>

      <div className={styles.footerSocial}>
        <a href="#" target="_blank" rel="noreferrer">
          <img src={whatsapp} alt="WhatsApp" />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <img src={instagram} alt="Instagram" />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
}