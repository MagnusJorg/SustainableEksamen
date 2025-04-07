import React from 'react';
import mystyle from './Kontakt.module.css';

const Kontakt = () => {
  return (
    <section className={mystyle.kontaktSection}>
      <h2 className={mystyle.kontaktOverskrift}>
        Vil du høre, hvor meget CO₂ din hjemmeside kan spare?
      </h2>

      <form className={mystyle.kontaktForm}>
        <div className={mystyle.inputRow}>
          <div className={mystyle.inputGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" />
          </div>

          <div className={mystyle.inputGroup}>
            <label htmlFor="tlf">Tlf:</label>
            <input type="tel" id="tlf" />
          </div>
        </div>

        <div className={mystyle.inputGroup}>
          <label htmlFor="besked">Besked:</label>
          <textarea id="besked" rows="6"></textarea>
        </div>

        <button type="submit" className={mystyle.kontaktKnap}>SEND</button>
      </form>
    </section>
  );
};

export default Kontakt;

