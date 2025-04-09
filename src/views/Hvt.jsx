import React from "react";
import styles from "./Hvt.module.css";
import hond from "../assets/hond.svg";
import Kolonner from "../components/Kolonner";

export default function Hvt() {
  return (
    <main>
      <section className={styles.hvtsek1}>
        <h1>Hvad vi tilbyder</h1>
        <p>
          Når nogen spørger: "Har du styr på jeres ESG-data?" <br />
          Så har du et konkret svar – med tal, besparelser og dokumentation, du kan sende videre med ro i maven.
        </p>
        <img src={hond} alt="hånd ikon" className={styles.hond} />
      </section>

      <Kolonner />
    </main>
  );
}


