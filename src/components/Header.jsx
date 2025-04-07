import { Link } from "react-router-dom";
import mystyle from "./Header.module.css";

export default function Header() {
    return (
        <header>
            <nav className={mystyle.navigation}>
                <ul>
                    <li>
                        <Link className={mystyle.linktext} to="/">Forside</Link>
                    </li>
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