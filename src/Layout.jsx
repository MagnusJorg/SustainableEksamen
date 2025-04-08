import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hvidboks from "./components/Universel";

function Layout() {
    return (
        <>
            <Hvidboks>
            <Header />
            
            
                <main className="mainpart">
                    <Outlet />
                </main>
            </Hvidboks>

            <Footer />
        </>
    );
}

export default Layout;