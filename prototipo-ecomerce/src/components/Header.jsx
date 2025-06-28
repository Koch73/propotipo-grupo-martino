// src/components/Header.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Header() {
    const { cart } = useCart();
    const navigate = useNavigate();
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

    const handleSearch = (e) => {
        e.preventDefault();
        const query = e.target.search.value.trim();
        if (query) navigate(`/?search=${query}`);
    };

    return (
        <header className="bg-gray-800 text-white p-4 shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold text-white">
                    🧊 FM Frío
                </Link>

                <form onSubmit={handleSearch} className="w-1/2 hidden md:flex">
                    <input
                        type="text"
                        name="search"
                        placeholder="Buscar productos..."
                        className="w-full px-4 py-2 rounded-l bg-white text-black focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-700"
                    >
                        Buscar
                    </button>
                </form>

                <div className="flex items-center gap-4">
                    <Link to="/cart" className="relative">
                        🛒
                        {totalItems > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-600 text-xs rounded-full px-2">
                                {totalItems}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
}
