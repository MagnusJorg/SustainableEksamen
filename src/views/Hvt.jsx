import { useState } from "react";
import styles from './Hvt.module.css';

function Hvt() {
    return (
        <main>
            <section className={styles.hvtsek1}>
                <h1>Hvad vi tilbyder</h1>
                <p>
                    Når nogen spørger: "Har du styr på jeres ESG-data?" <br />
                    Så har du et konkret svar – med tal, besparelser og dokumentation, du kan sende videre med ro i maven.
                </p>
            </section>

            {/* Anden sektion med 3 kolonner */}
            <section className={styles.hvtSek2}>
                <div className={styles.kolonne}>
                    <h2>ESG-tal</h2>
                    <p>
                        Du får data, der viser, hvor meget din hjemmeside sparer i CO₂ sat i kontekst og klar til at sende videre. 
                        Perfekt til rapporter, møder med kunder eller når du skal vise ledelsen, at du faktisk gør noget.
                    </p>
                </div>

                <div className={styles.kolonne}>
                    <h2>Ressourceoptimering</h2>
                    <p>
                        Din hjemmeside kommer til at se præcis ud som før. Vi komprimerer og ressourceoptimerer det du allerede har, 
                        så den bliver grønnere – og hurtigere.
                    </p>
                </div>

                <div className={styles.kolonne}>
                    <h2>Hurtig leveringen</h2>
                    <p>
                        Vi leverer ESG-dataene på under 3 dage. Du behøver ikke ændre noget – vi klarer det hele bag kulissen. 
                        Hurtigt. Sikkert. Uden bøvl.
                    </p>
                </div>
            </section>
        </main>
    );
}

export default Hvt;


