import React from "react";
import styles from "../views/Hvt.module.css";
import kalender from "../assets/kalender.svg";
import esg from "../assets/esgRapport.svg";
import snegl from "../assets/snegleGrafik.svg";


//Komponentent til kolonner
export default function Kolonner() {
 // Data til kolonnerne
  const kolonner = [
    {
      titel: "ESG-tal",
      tekst: "Du får data, der viser, hvor meget din hjemmeside sparer i CO₂, sat i kontekst og klar til at sende videre. Perfekt til rapporter, møder med kunder eller når du skal vise ledelsen, at du faktisk gør noget.",
      billede: esg,
      alt: "ESG ikon"
    },
    {
      titel: "Ressource optimering",
      tekst: "Din hjemmeside kommer til at se præcis ud som før. Vi komprimerer og ressourceoptimerer det du allerede har, så den bliver grønnere – og hurtigere.",
      billede: snegl,
      alt: "Snegle grafik"
    },
    {
      titel: "Hurtig levering",
      tekst: "Vi leverer ESG-dataene på under 3 dage. Du behøver ikke ændre noget – vi klarer det hele bag kulissen. Hurtigt. Sikkert. Uden bøvl.",
      billede: kalender,
      alt: "Kalender ikon"
    },
  ];

  // Kompontent
  return (
    <section className={styles.hvtSek2}>
      {kolonner.map((item, index) => (

        <article className={styles.kolonne} key={index}>

          <h2>{item.titel}</h2>

          <p>{item.tekst}</p>

          <img src={item.billede} alt={item.alt} className={styles.kolonnebillede} loading="lazy"/>

        </article>
      ))}
    </section>
  );
}
