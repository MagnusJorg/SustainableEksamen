import styles from './Oo.module.css';
import Image1 from '../assets/sandra.webp';
import Image2 from '../assets/claire.webp';
import Image3 from '../assets/magnus.webp';
// import Kontakt from '../components/Kontakt'; // Kommentér ud indtil Kontakt virker

function OmOs() {
    return (
        <div className={styles.container}>
            <section className={styles.topSection}>
                <div className={styles.textContainer}>
                    <h1 className={styles.heading}>Om os</h1>
                    <p className={styles.paragraph}>
                        Der er nok at holde styr på i forvejen.
                        <br />
                        Når kunder, partnere eller bestyrelsen beder om ESG-dokumentation, skal det bare være nemt og tydeligt.
                    </p>
                    <p className={styles.paragraph}>
                        Derfor skabte vi en løsning, der arbejder bag kulissen.
                        <br />
                        1. Ingen ændringer på din hjemmeside – medmindre du ønsker det<br />
                        2. Intet du selv skal sætte op<br />
                        3. ESG-data, leveret hurtigt og konkret
                    </p>
                    <p className={styles.italic}>Vi er her for dig, der vil levere resultater.</p>
                </div>
                <div className={styles.iconContainer}>
                    <img src="/team-icon.svg" alt="Team ikon" className={styles.icon} />
                </div>
            </section>

            <section className={styles.profileSection}>
                <div className={styles.profileCard}>
                    <img src={Image1} alt="Sandra Pipoli" className={styles.profileImage} />
                    <h2 className={styles.profileName}>Sandra Pipoli</h2>
                    <p>Chief Design Officer</p>
                    <p className={styles.contactInfo}>+45 00 00 00 00</p>
                    <p>csm@sp.com</p>
                </div>
                <div className={styles.profileCard}>
                    <img src={Image2} alt="Claire Kahindi" className={styles.profileImage} />
                    <h2 className={styles.profileName}>Claire Kahindi</h2>
                    <p>Chief Creative Officer</p>
                    <p className={styles.contactInfo}>+45 00 00 00 00</p>
                    <p>csm@ck.com</p>
                </div>
                <div className={styles.profileCard}>
                    <img src={Image3} alt="Magnus Jørgensen" className={styles.profileImage} />
                    <h2 className={styles.profileName}>Magnus Jørgensen</h2>
                    <p>Head of Account</p>
                    <p className={styles.contactInfo}>+45 00 00 00 00</p>
                    <p>csm@mj.com</p>
                </div>
            </section>

            {/* Fjern kommentaren herunder hvis Kontakt er klar */}
            {/* <div className={styles.kontaktSection}>
                <Kontakt />
            </div> */}
        </div>
    );
}

export default OmOs;
