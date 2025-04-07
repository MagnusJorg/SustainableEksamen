import { Link } from "react-router-dom";
import mystyle from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={mystyle.footer}>
            <section className={mystyle.footerKolonne}>
                <h2>Det var et lille udpluk</h2>
                <p><em>men jeg er kun en mail væk, hvis du vil vide mere!</em></p>
            </section>

            <section className={mystyle.kontakt}>
                <Link to="/">FORSIDE</Link>
                <Link to="/Hvt">HVAD VI TILBYDER</Link>
                <Link to="/Svd">SÅDAN VIRKER DET</Link>
                <Link to="/Oo">OM OS</Link>
                <a href="mailto:Magnusjorgen@gmail.com">csm@kontakt.com</a>
            </section>
        </footer>
    );
}

