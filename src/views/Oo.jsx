import { useState } from 'react';
import mystyle from './ThirdPAge.module.css';
import Kontakt from '../components/Kontakt';

const itemlist = [
    { id: "1", name: "item 1", desc: "item 1 description. A fja laædsj æaljf puæaasr." },
    { id: "2", name: "item 2", desc: "item 2 description. A fgsugf lkhdj klahdj dkhf." },
    { id: "3", name: "item 3", desc: "item 3 description. A kpidf kfd jfkji uows lsr." },
];

function Oo() {
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleClickOpen = (item) => {
        setSelectedItem(item);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedItem(null);
    };

    return (
        <>
            <Kontakt />
        </>
    );
};

export default Oo;
