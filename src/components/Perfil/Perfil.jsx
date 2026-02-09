import React from "react";
import styles from "./Perfil.module.scss";
// 1. Mantenha apenas a importação da foto que você quer usar no círculo
import FotoPerfil from "../../assets/perfil2.jpeg";

export default function Perfil() {
  return (
    <section className={styles.containerPerfil}>
      <div className={styles.cardPerfil}>
        <div className={styles.fotoArea}>
          {/* Esta é a única imagem que ficará no card */}
          <img src={FotoPerfil} alt="Angelica Nemeth" />
        </div>

        <div className={styles.infoArea}>
          <h2>Angelica Nemeth</h2>
          <p className={styles.status}>Voluntária Ativa</p>

          {/* 2. REMOVA TODO O BLOCO DA 'fotoSecundaria' DAQUI */}

          <p className={styles.descricao}>
            Apaixonado por fazer a diferença na comunidade. Acredito que
            pequenas ações podem transformar vidas e estou sempre em busca de
            novas oportunidades para ajudar.
          </p>

          <div className={styles.detalhes}>
            <span>Piedade, SP</span>
            <span>angel_gnemeth@gmail.com</span>
            <span>Membro desde setembro 2025</span>
          </div>

          <div className={styles.tags}>
            <span>Educação</span>
            <span>Meio Ambiente</span>
            <span>Assistência Social</span>
            <span>Design</span>
          </div>
        </div>
      </div>
    </section>
  );
}