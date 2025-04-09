import { Link } from "react-router-dom"
import mystyle from "./DefaultPage.module.css";

{/* Importerer ikonerne */ }
import bilIkon from "../assets/bil.webp";
import flyIkon from "../assets/fly.webp";
import træerIkon from "../assets/træer.webp";
import cykelIkon from "../assets/cykel.webp";
import skyIkon from "../assets/sky.webp";


// DefaultPage-komponenten er den hovedkomponent, som styrer indholdet på denne side
export default function DefaultPage() {

    const itemlist = [
        { image: bilIkon, name: "Bilkørsel", desc: "266,000 km", altText: "Bilikon, som repræsenterer, hvor mange km 40 tons CO2 svarer til biltransport" },
        { image: flyIkon, name: "Flyrejser", desc: "250,000 km", altText: "Flyikon, som repræsenterer hvor mange km 40 tons CO2 svarer til i flytransport" },
        { image: cykelIkon, name: "El cykler", desc: "20,000,000 km", altText: "El-cykelikon, som repræsenterer hvor mange km 40 tons CO2 svarer til i el-cykeltransport" },
        { image: træerIkon, name: "CO2 optaget af", desc: "2,000 træer", altText: "Træeikon, som repræsenterer hvor meget 40 tons CO2 svarer til, hvis det skulle optages af træer" }
    ]


    // Returnerer JSX, der definerer strukturen af komponenten
    return (

        <section>
            <div className={mystyle.headerWrapper}>
                <h1>
                    Få <span style={{ color: 'green' }}>ESG-data</span> der dokumenterer <br />
                    op til 40 tons <span style={{ color: 'green' }}>CO₂e/år</span> besparelser. <br />
                    – leveret på under 3 dage.
                </h1>
                <img src={skyIkon} alt="Sky ikon" className={mystyle.skyIkon} />
            </div>

            <h2 className={mystyle.underOverskrift}>Dette svarer til</h2>
            
            <div className={mystyle.eksempler}>

                {/* Her looper vi igennem itemlist og viser hver ting */}
                {itemlist.map((item, index) => (
                    <div key={index} className={mystyle.forklaring}>

                        {/* Giver hver sammenligning et billede*/}
                        <div className={mystyle.ikonWrapper}>
                            <img src={item.image} alt={item.altText} />
                        </div>
                        {/* Tildeler, hver sammenligning et navnet og beskrivelse */}
                        <p><strong>{item.name}</strong></p>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>



            {/* Knap med link */}
            <div className={mystyle.knapWrapper}>
                <Link to="/Svd" className={mystyle.knap}>
                    SÅDAN VIRKER DET →
                </Link>
            </div>


        </section>

    );
}

