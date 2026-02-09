import React from "react";
import styles from "./QuemSomos.module.scss";
import ImagemGrupo from "../../assets/imgInicial.png"; // Usando a imagem disponível nos seus assets


export default function QuemSomos() {
  return (
    <main className={styles.containerQuemSomos}>
      <section className={styles.conteudo}>
        {/* Lado Esquerdo: Imagem */}
        <div className={styles.imagemArea}>
          <img src={ImagemGrupo} alt="Pessoas unidas em círculo" />
        </div>

        {/* Lado Direito: Texto */}
        <div className={styles.textoArea}>
          <h2>Como a Connect atua em projetos sociais</h2>

          <p>
            A Connect é uma iniciativa que conecta empresas, pessoas e
            organizações sociais com um propósito em comum: gerar impacto
            positivo e transformar realidades. Atuamos no desenvolvimento e
            apoio a projetos sociais nas áreas de educação, inclusão,
            tecnologia, esporte e assistência social, sempre com foco em impacto
            real e sustentável.
          </p>

          <p>
            Há anos, trabalhamos aproximando quem quer ajudar de quem precisa,
            promovendo ações sociais estruturadas, transparentes e alinhadas às
            necessidades das comunidades. Acreditamos que a transformação
            acontece quando propósito, colaboração e responsabilidade caminham
            juntos.
          </p>

          <p>
            Nosso compromisso é conectar boas causas a quem deseja fazer a
            diferença, criando pontes entre empresas, voluntários e projetos
            sociais que realmente transformam vidas.
          </p>
        </div>
      </section>
    </main>
  );
}