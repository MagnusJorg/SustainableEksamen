
{/* Import Statements/img/ikoner */}
import styles from './Oo.module.css';
import Kontakt from '../components/Kontakt';
import Image1 from '../assets/sandra.webp';
import Image2 from '../assets/claire.webp';
import Image3 from '../assets/magnus.webp';
import OoiIcon from '../assets/ooi.svg';

function OmOs() {
    return (
        <div className={styles.container}>
            <section className={styles.topSection}>
                <div className={styles.textContainer}>
                    <h1 className={styles.heading}>Om os</h1>
                    <p className={styles.paragraph}>
                        Der er nok at holde styr på i forvejen. Når kunder, partnere eller bestyrelsen beder om ESG-dokumentation, skal det bare være nemt og tydeligt.
                    </p><br />
                    <p className={styles.paragraph}>
                        Derfor skabte vi en løsning, der arbejder bag kulissen:
                        <br />1. Ingen ændringer på din hjemmeside – medmindre du ønsker det
                        <br />2. Intet du selv skal sætte op
                        <br />3. ESG-data leveret hurtigt og konkret
                    </p> <br />
                    <p className={styles.italic}>Vi er her for dig, der vil levere resultater.</p>
                </div>
                <div className={styles.iconContainer}>
                    <img src={OoiIcon} alt="Ooi Icon" className={styles.icon} />
                </div>
            </section>

            {/* Her opretter vi et array (liste) af objekter, der indeholder data om hver person. Vi bruger map()-funktionen til at gennemløbe listen og generere et div-element for hver profil. */}
            <section className={styles.profileSection}>
                {[{img: Image1, name: "Sandra Pipoli", role: "Chief Design Officer", contact: "+45 00 00 00 00", email: "csm@sp.com"},
                {img: Image2, name: "Claire Kahindi", role: "Chief Creative Officer", contact: "+45 00 00 00 00", email: "csm@ck.com"},
                {img: Image3, name: "Magnus Jørgensen", role: "Head of Account", contact: "+45 00 00 00 00", email: "csm@mj.com"}].map((profile, index) => (
                    <div key={index} className={styles.profileCard}>
                        <img src={profile.img} alt={profile.name} className={styles.profileImage} loading="lazy" />
                        <h2 className={styles.profileName}>{profile.name}</h2>
                        <p>{profile.role}</p>
                        <p className={styles.contactInfo}>{profile.contact}</p>
                        <p>{profile.email}</p>
                    </div>
                ))}
            </section>

            {/*Dette er en separat komponent, som vi har importeret. Denne komponent bliver vist her i sin egen sektion*/}
            <section>
                <Kontakt />
            </section>
        </div>
    );
}

{/*Dette gør komponenten tilgængelig for andre filer. Det betyder, at vi kan bruge denne komponent i andre dele af vores React-applikation ved at importere den. */}
export default OmOs;
