// Universel.jsx
import React from 'react';
import mystyle from './Universel.module.css';

export default function Hvidboks({ children }) {
    return (
        <div className={mystyle.hvidboks}>
            {children}
        </div>
    );
}

