import { Link } from "react-router-dom";
import mystyle from "./Header.module.css";

export default function Header() {
    return (
        <header>
            <nav className={mystyle.navigation}>
                <ul>
                    <li>
                        <Link className={mystyle.linktext} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={mystyle.linktext} to="/Skoler">Skoler</Link>
                    </li>
                    <li>
                        <Link className={mystyle.linktext} to="/second">Second page</Link>
                    </li>
                    <li>
                        <Link className={mystyle.linktext} to="/third">Third page</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}