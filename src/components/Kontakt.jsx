import mystyle from "./Kontakt.module.css";
import React from 'react';

const Kontakt = () => {
  return (
    <section className="kontakt-section">
      <h2 className="kontakt-overskrift">
        Vil du høre, hvor meget CO₂ din hjemmeside kan spare?
      </h2>

      <form className="kontakt-form">
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" />
          </div>

          <div className="input-group">
            <label htmlFor="tlf">Tlf:</label>
            <input type="tel" id="tlf" />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="besked">Besked:</label>
          <textarea id="besked" rows="6"></textarea>
        </div>

        <button type="submit" className="kontakt-knap">SEND</button>
      </form>
    </section>
  );
};

export default Kontakt;
