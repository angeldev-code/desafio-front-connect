//importando as imagens da página Ações da Connect

import Multirao from "../../assets/mutirao.png";
import Aulas from "../../assets/aulas.png";
import Esporte from "../../assets/esporte.png";
import Familia from "../../assets/familia.png";
import Futuro from "../../assets/futuro.png";
import Conecta from "../../assets/conecta.png";

//importando a folha de estilo da página Ações da Connect

import styles from "./AcoesDaConnect.module.scss";

function AcoesDaConnect() {
  return (
    <main className={styles.containerAcoes}>
      {/* Título e descrição centralizados */}
      <section className={styles.topoAcoes}>
        <h1>Ações da Connect</h1>
        <p>
          Junte-se a quem acredita na mudança. Apoie, participe e transforme
          vidas através de ações sociais que geram impacto real nas comunidades.
        </p>
      </section>

      {/* Grid de Cards */}
      <section className={styles.gridCards}>
        <div className={styles.card}>
          <img src={Multirao} alt="Mutirão de reciclagem" />
          <h3>Mutirão de reciclagem</h3>
          <p>
            Coletar materiais recicláveis e orientar sobre descarte consciente.
          </p>
          <button>Quero participar</button>
        </div>

        <div className={styles.card}>
          <img src={Aulas} alt="Aulas de Tecnologia" />
          <h3>Aulas de Tecnologia</h3>
          <p>
            Ensinar noções básicas de informática, internet segura e
            programação.
          </p>
          <button>Quero participar</button>
        </div>

        <div className={styles.card}>
          <img src={Esporte} alt="Esporte e Inclusão" />
          <h3>Esporte e Inclusão</h3>
          <p>
            Organizar treinos e jogos que incentivem a participação de todos.
          </p>
          <button>Quero participar</button>
        </div>

        <div className={styles.card}>
          <img src={Familia} alt="Instituto grande familia" />
          <h3>Instituto grande familia</h3>
          <p>
            Contribua com alimentos não perecíveis e ajude famílias em
            vulnerabilidade.
          </p>
          <button>Quero Doar</button>
        </div>

        <div className={styles.card}>
          <img src={Futuro} alt="Projeto Futuro na Escola" />
          <h3>Projeto Futuro na Escola</h3>
          <p>
            Doe livros, cadernos e materiais para ajudar jovens nos estudos.
          </p>
          <button>Quero Doar</button>
        </div>

        <div className={styles.card}>
          <img src={Conecta} alt="Instituto Conecta Jovem" />
          <h3>Instituto Conecta Jovem</h3>
          <p>
            Doe computadores e tablets usados em bom estado para inclusão
            digital.
          </p>
          <button>Quero Doar</button>
        </div>
      </section>
    </main>
  );
}
export default AcoesDaConnect;