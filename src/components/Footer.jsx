import { Link } from "react-router-dom";
import mystyle from "./Footer.module.css";



export default function Footer() {
    return (
        <footer className={mystyle.footer}>
            <section className={mystyle.footerKolonne}>
           {/* skrift ved siden af foooter */}
                <h1>Ingen grøn snak <br /> - kun grønne resultater</h1>
            </section>
             {/* Links */}
            <section className={mystyle.kontakt}>
                <Link to="/"  aria-label="Gå til forside" >FORSIDE</Link>
                <Link to="/Hvt"  aria-label="Gå til hvad vi tilbyder" >HVAD VI TILBYDER</Link>
                <Link to="/Svd" aria-label="Gå til sådan virker det" >SÅDAN VIRKER DET</Link>
                <Link to="/Oo" aria-label="Gå til om os" >OM OS</Link>
                <a href="mailto:Magnusjorgen@gmail.com" aria-label="send en mail" >CSMKONTAKT@GMAIL.COM</a>
            </section>
        </footer>
    );
}

