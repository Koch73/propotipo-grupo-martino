import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function Cart() {
    const { cart, removeFromCart } = useCart();

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="p-4">
            <h1 className="text-2xl mb-4">Tu carrito</h1>
            {cart.length === 0 ? (
                <p>El carrito está vacío.</p>
            )
                : (
                    <div>
                        {cart.map((item, i) => (
                            <div key={i} className="mb-2 flex justify-between">
                                <span>{item.name}</span>
                                <span>${item.price}</span>
                                <button onClick={() => removeFromCart(item.id)} className="text-red-500">Eliminar</button>
                            </div>
                        ))}
                        <div className="mt-4 font-bold">Total: ${total}</div>
                        <Link to="/checkout" className="inline-block mt-4 px-4 py-2 bg-green-600 text-white rounded">Proceder al pago</Link>
                    </div>
                )}
        </div>
    );
}