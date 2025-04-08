import { Link } from "react-router-dom"
import mystyle from "./DefaultPage.module.css";

{/* Importerer ikonerne */}
import bilIkon from "../assets/bil.webp";
import flyIkon from "../assets/fly.webp";
import træerIkon from "../assets/træer.webp";
import cykelIkon from "../assets/cykel.webp";
import skyIkon from "../assets/sky.webp";


export default function DefaultPage() {

    const itemlist = [
        { id: "1", name: "Bilkørsel", desc: "266,000 km", image: bilIkon},
        { id: "2", name: "Flyrejser", desc: "250,000 km", image: flyIkon},
        { id: "3", name: "El cykler", desc: "20,000,000 km", image: cykelIkon},
        { id: "3", name: "CO2 optaget af", desc: "2,000 træer", image: træerIkon}
    ]
    return (
  
            <section>
                <div className={mystyle.headerWrapper}>
                <h1>
                Få <span style={{ color: 'green' }}>ESG-data</span> der dokumenterer <br />
                op til 40 tons <span style={{ color: 'green' }}>CO₂e/år</span> besparelser. <br />
                – leveret på under 3 dage.
            </h1>
            <img src={skyIkon} alt="Sky" className={mystyle.skyIkon} />
</div>

<h2 className={mystyle.underOverskrift}>Dette svarer til</h2>
                <div className={mystyle.eksempler}>
                    {itemlist.map((item, index) => (
                        <div key={index} className={mystyle.forklaring}>
                             <div className={mystyle.ikonWrapper}>
    <img src={item.image} alt={item.name} className={mystyle.ikoner} />
  </div> {/* Placerer billede over h2 */}
                            <p><strong>{item.name}</strong></p>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>



 {/* KNAP */}
 <div className={mystyle.knapWrapper}>
    <Link to="/Svd" className={mystyle.knap}>
      SÅDAN VIRKER DET →
    </Link>
  </div>




            </section>

    );
}

