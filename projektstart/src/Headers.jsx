import React from 'react';
import './App.css';

export default function Headers() {
    return (
        <header>
            <div className="logo">
                {/* Use direct path if image is in public folder */}
                <img src="/sundhedlogo.png" alt="Logo" />  
            </div>
            <nav>
                <ul>
                    <li>Ernæring</li>
                    <li>Tips</li>
                    <li>Om os</li>
                </ul>
            </nav>
        </header>
    );
}
