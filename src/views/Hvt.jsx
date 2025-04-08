import { useState } from "react";
import styles from './Hvt.module.css';

function Hvt() {
    return (
        <main>
            <section className={styles.hvtsek1}>
                <h1>Hvad vi tilbyder</h1>
                <p>Når nogen spørger: "Har du styr på jeres ESG-data?" <br />
                    Så har du et konkret svar – med tal, besparelser og dokumentation, du kan sende videre med ro i maven.</p>
                <img src="src/assets/hond.svg" alt="hånd ikon" className={styles.hond} />
            </section>

            <section className={styles.hvtSek2}>
                <article className={styles.kolonne}>
                    <h2>ESG-tal</h2>
                    <p> Du får data, der viser, hvor meget din hjemmeside sparer i CO₂, sat i kontekst og klar til at sende videre. Perfekt til rapporter, møder med kunder eller når du skal vise ledelsen, at du faktisk gør noget.</p>
                    <img src="src\assets\esgRapport.svg" alt="ESG ikon" className={styles.kolonnebillede} />
                </article>
                <article className={styles.kolonne}>
                    <h2>Ressource optimering</h2>
                    <p> Din hjemmeside kommer til at se præcis ud som før. Vi komprimerer og ressourceoptimerer det du allerede har,så den bliver grønnere – og hurtigere.</p>
                    <img src="src/assets/snegleGrafik.svg" alt="ESG ikon" className={styles.kolonnebillede} />
                </article>
                <article className={styles.kolonne}>
                    <h2>Hurtig levering</h2>
                    <p>Vi leverer ESG-dataene på under 3 dage. Du behøver ikke ændre noget – vi klarer det hele bag kulissen. Hurtigt. Sikkert. Uden bøvl.</p>
                    <img src="src/assets/kalender.svg" alt="ESG ikon" className={styles.kolonnebillede} />
                </article>
            </section>
        </main>
    );
}

export default Hvt;


