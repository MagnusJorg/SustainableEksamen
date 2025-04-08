import { Link } from "react-router-dom"; {/* For navigation mellem sider i appen */ }
import mystyle from "./Header.module.css";
import Lottie from 'lottie-react'; {/* Importer Lottie til at vise animationer */ }
import animationData from "../assets/logo-animation.json"; {/* Importerer min logo animation */ }



export default function Header() {
    return (
        <header className={mystyle.header}>
            <nav className={mystyle.navigation}> {/* Navigation wrapper */}


                {/* Logo animation med link til forsiden */}
                <Link to="/" className={mystyle.logo}>
                    <Lottie animationData={animationData}
                        loop={false} // Sætter den til kun at køre 1 gang
                        className={mystyle.logoAnimation} />
                </Link>


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