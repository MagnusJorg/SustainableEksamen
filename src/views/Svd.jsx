import "./svd.css"; //css fil til jsx
import lys from '../assets/lys.svg'; //figur til tekst
//har lavet ny import fordi den ikke skal loade på alle siderne.
import { Suspense, lazy } from "react";
const Lottie = lazy(() => import("lottie-react"));

import Kontakt from '../components/Kontakt'; //component

import step1Anim from "../assets/step1.webm"; // Video
import step2Anim from "../assets/step2.json"; // JSON animation
import step3Anim from "../assets/step3.webm"; // Video

export default function Svd() {
  // Laver en liste der beskriver hvert element, her navngivet steps
  const steps = [
    {
      id: "step1",
      title: "1. Få en gratis vurdering",
      text: "Vi starter med at analysere din hjemmeside og giver dig et konkret estimat på, hvor meget CO₂ du kan forvente at spare – helt uforpligtende.",
      isVideo: true,
      animation: step1Anim, // Importeret video fil
    },
    {
      id: "step2",
      title: "2. Vi optimerer",
      text: "Vi komprimerer billeder, scripts og mediefiler – men ændrer intet visuelt. Din hjemmeside kommer til at se ud præcis som før, den bliver bare grønnere og endnu hurtigere.",
      isVideo: false,
      animation: step2Anim, // Importeret JSON animation
    },
    {
      id: "step3",
      title: "3. Du får ESG-data",
      text: "Vi viser dig, hvor meget CO₂ din hjemmeside spare før og efter  – regnet ud i tal og billeder.Så det er nemt at forstå, forklare og dokumentere.",
      isVideo: true,
      animation: step3Anim, // Importeret video fil
    },
  ];

  // Indhold der vises til brugeren
  return (
    <section className="how-section">
      <div className="how-intro">
        <div className="intro-text">
          <h1>Sådan virker det</h1>
          <p>En løsning, der respekterer din tid og dit ansvar <br /> – og gør det nemt at komme i mål.</p>
        </div>
        <div className="intro-graphic">
          <img src={lys} alt="Lys idé grafik" className="intro-image" />
        </div>
      </div>

      {/* Kører igennem hvert trin i steps-arrayet og viser hvert trin på hjemmesiden. */}
      <div className="how-steps">
        {/* (Map) bruges til at "gennemløbe" hvert element i et array og returnere en liste af JSX-elementer */}
        {steps.map((step) => (
          <div className="step-row" key={step.id}> {/* Unik nøgle for hvert element for at sikre korrekt opdatering og rendering */}
            <div className="step-text">
              <h2>{step.title}</h2>
              <p>{step.text}</p>
            </div>
            <div className="step-graphic">
              {step.isVideo ? (
                // Håndtering af video-steps
                <video
                  src={step.animation}
                  autoPlay
                  loop
                  muted
                  type="video/webm"
                  className="step-video"
                  loading="lazy"
                />
              ) : (
                // Håndtering af Lottie-animation
                <Suspense fallback={<div>Indlæser animation...</div>}>
                   <Lottie animationData={step.animation} loop={true} aria-label={`Visualisering af ${step.title}`}/>
                </Suspense>

              )}
            </div>
          </div>
        ))}
      </div>

      {/* Viser Kontakt componenten */}
      <section>
        <Kontakt />
      </section>
    </section>
  );
}
