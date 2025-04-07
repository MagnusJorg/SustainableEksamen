import { Link } from "react-router-dom"
import mystyle from "./DefaultPage.module.css";



export default function DefaultPage() {

    const itemlist = [
        { id: "1", name: "Bilkørsel", desc: "266,000 km" },
        { id: "2", name: "Flyrejser", desc: "250,000 km" },
        { id: "3", name: "El cykler", desc: "20,000,000 km" },
        { id: "3", name: "CO2 optaget af", desc: "2,000 træer" }
    ]
    return (
  
            <section>
                <h1>
                Få <span style={{ color: 'green' }}>ESG-data</span> der dokumenterer 
                op til 40 tons <span style={{ color: 'green' }}>CO₂e/år</span> besparelser.
                – leveret på under 3 dage.
            </h1>
<p>Dette svarer til</p>
                <div className={mystyle.eksempler}>
                    {itemlist.map((item, index) => (
                        <div key={index} className={mystyle.card}>
                            <h1>{item.name}</h1>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

    );
}

