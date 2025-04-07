import { useState } from "react";
import AccordionItem from "../components/AccordionItem";


function Hvt() {
    const itemlist = [
        { id: "1", name: "kirkebakken", desc: "Kirkebakken er en folkeskole" },
        { id: "2", name: "eaaa", desc: "Eaaa er et erhvers akademi" },
        { id: "3", name: "universitet", desc: "Universitet er et uni" },
    ]

    const [bcolor, setBcolor] = useState("white");
    const [tcolor, setTcolor] = useState("black");
    const [message, setMessage] = useState("Klik på skolerne for at se info");

    const changeColor = () => {
        if (bcolor === "grey") {
            setBcolor("white");
            setTcolor("black");
        } else {
            setBcolor("grey")
            setTcolor("white");
        }
    }


    return (
        <section style={{ backgroundColor: bcolor, color: tcolor }}>
            <h1>Her er en liste over skoler</h1>
            <div style={{ backgroundColor: bcolor, color: tcolor }}>
                {itemlist.map((item, index) => (
                    <AccordionItem key={index} oneitem={item} />
                ))}
            </div>
            {message}

            <p><button onClick={changeColor}>Skift til darkmode </button></p>
        </section>
        
    )
}

export default Hvt;


