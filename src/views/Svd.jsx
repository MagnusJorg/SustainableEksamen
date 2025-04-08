import React from "react";
import "./svd.css";
import lys from '../assets/lys.svg';

export default function Svd() {
  const steps = [
    {
      title: "1. Få en gratis vurdering af din hjemmeside",
      text: "Vi starter med at analysere din hjemmeside og giver dig et konkret estimat på, hvor meget CO₂ du kan forvente at spare – helt uforpligtende.",
    },
    {
      title: "2. Vi optimerer - uden at ændre noget visuelt",
      text: "Vi komprimerer billeder, scripts og mediefiler – men ændrer intet visuelt. Din hjemmeside kommer til at se ud præcis som før, den bliver bare grønnere og endnu hurtigere.",
    },
    {
      title: "3. Du får ESG-data klar til rapport",
      text: "Vi viser dig, hvor meget CO₂ din hjemmeside spare før og efter – regnet ud i tal og billeder. Så det er nemt at forstå, forklare og dokumentere.",
    },
  ];

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

      <div className="how-steps">
        {steps.map((step, index) => (
          <div className="step-row" key={index}>
            <div className="step-text">
              <h2>{step.title}</h2>
              <p>{step.text}</p>
            </div>
            <div className="step-graphic">
              {/* Motion graphic placeholder */}
              <div className="motion-placeholder">🎞️</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
