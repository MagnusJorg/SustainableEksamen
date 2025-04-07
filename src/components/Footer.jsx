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
                <Link to="/">FORIDE</Link>
                <Link to="/Hvt">HVAD VI TILBYDER</Link>
                <Link to="/Svd">SÅDAN VIRKER DET</Link>
                <Link to="/Oo">OM OS</Link>
                <a href="mailto:Magnusjorgen@gmail.com">csm@kontakt.com</a>
            </section>
        </footer>
    );
}

