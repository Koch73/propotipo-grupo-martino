import React from 'react';
import { useCart } from '../context/CartContext';

const products = [
    { id: 1, name: 'Producto A', price: 1000 },
    { id: 2, name: 'Producto B', price: 1500 },
];

export default function Home() {
    const { addToCart } = useCart();

    return (
        <div className="p-4">
            <h1 className="text-2xl mb-4">Productos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {products.map(p => (
                    <div key={p.id} className="p-4 border rounded">
                        <h2 className="text-xl">{p.name}</h2>
                        <p>${p.price}</p>
                        <button onClick={() => addToCart(p)} className="mt-2 px-4 py-1 bg-blue-500 text-white rounded">
                            Agregar al carrito
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}