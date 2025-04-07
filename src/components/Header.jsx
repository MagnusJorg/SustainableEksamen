import { Link } from "react-router-dom";
import mystyle from "./Header.module.css";

export default function Header() {
    return (
        <header className={mystyle.header}>  {/* Her tilføjer vi en className fra css modulet */}
        <nav className={mystyle.navigation}> {/* Navigation wrapper */}
            
            {/* Logo og tekst */}
            <div className={mystyle.logo}>
                {/* Billedet hentes fra public-mappen */}
                <img src="/logo.png" alt="CSM logo" />
            </div>

            {/* Menu links */}
            <ul className={mystyle.navLinks}>
                    {/* Link fra react-router-dom, som navigerer internt */}
                    <li>
                        <Link className={mystyle.linktext} to="/Hvt">HVAD VI TILBYDER</Link>
                    </li>
                    <li>
                        <Link className={mystyle.linktext} to="/Svd">SÅDAN VIRKER DET</Link>
                    </li>
                    <li>
                        <Link className={mystyle.linktext} to="/Oo">OM OS</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}