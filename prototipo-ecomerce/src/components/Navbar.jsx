// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navBar.css'
export default function Navbar() {
    return (
        <>
            <div>
                <div id="sidebar" className="position-fixed top-0 start-0 h-100 bg-custom shadow z-2 d-flex flex-column justify-content-start p-4">
                    <form className="d-grid gap-2" id="sidebarForm">
                        <button className="btn" data-action="perfil"><Link to="/" className="text-xl font-bold">Home</Link></button>
                        <button className="btn" data-action="opciones"><Link to="/cart">🛒 Carrito</Link></button>

                    </form>
                </div>
            </div>
        </>
    );
}
