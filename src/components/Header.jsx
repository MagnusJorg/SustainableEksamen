import { Link } from "react-router-dom";
import mystyle from "./Header.module.css";
import Lottie from 'lottie-react';


import animationData from "../assets/logo-animation.json";



export default function Header() {
    return (
        <header className={mystyle.header}>  {/* Her tilføjer vi en className fra css modulet */}
        <nav className={mystyle.navigation}> {/* Navigation wrapper */}
            

 {/* Logo animation med Link til forsiden 
 <Link to="/" className={mystyle.logo}>
                    <Lottie animationData={animationData} className={mystyle.logoAnimation} />
                </Link>*/}


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