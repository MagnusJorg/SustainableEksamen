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
          <input
            type="email"
            id="email"
            placeholder="Email:"
            className={mystyle.inputFelt}
          />
          <input
            type="tel"
            id="tlf"
            placeholder="Tlf:"
            className={mystyle.inputFelt}
          />
        </div>

        <textarea
          id="besked"
          rows="6"
          placeholder="Besked:"
          className={mystyle.inputFelt}
        ></textarea>

        <button type="submit" className={mystyle.kontaktKnap}><p>SEND</p></button>
      </form>
    </section>
  );
};

export default Kontakt;
