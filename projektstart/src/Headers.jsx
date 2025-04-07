import React from 'react';
import './App.css';

export default function Headers() {
    return (
        <header>
            <div className="logo">
                {/* billeder til header */}
                <img src="/sundhedlogo.png" alt="Logo" />  
            </div>
            <nav>
                <ul>
                    {/* nav links */}
                    <li>HVAD TILBYDER VI</li>
                    <li>SÅDAN VIRKER DET</li>
                    <li>OM OS</li>
                </ul>
            </nav>
        </header>
    );
}
