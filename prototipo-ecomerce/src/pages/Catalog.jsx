// src/pages/Catalog.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Catalog() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const { addToCart } = useCart();

    useEffect(() => {
        // Simulamos productos traídos desde una API
        const fakeFetchProducts = async () => {
            const data = [
                {
                    id: 1,
                    name: 'Split Inverter 3000F',
                    price: 295000,
                    image: '../../public/aire acondicionado.png',
                    stock: 10,
                },
                {
                    id: 2,
                    name: 'Heladera Exhibidora 350L',
                    price: 420000,
                    image: '../../public/heladera.jpg',
                    stock: 4,
                },
                {
                    id: 3,
                    name: 'Ruleman 11B 36x42',
                    price: 310000,
                    image: '../../public/ruleman.png',
                    stock: 0,
                },
            ];
            setProducts(data);
        };

        fakeFetchProducts();
    }, []);

    const filtered = products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Catálogo de productos</h1>

            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Buscar por nombre..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border p-2 w-full md:w-1/3"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filtered.map((product) => (
                    <div
                        key={product.id}
                        className="border rounded p-4 shadow hover:shadow-lg transition"
                    >
                        <Link to={`/product/${product.id}`}>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover mb-2"
                            />
                            <h2 className="text-lg font-semibold">{product.name}</h2>
                        </Link>
                        <p className="text-gray-700">${product.price}</p>
                        {product.stock > 0 ? (
                            <button
                                onClick={() => addToCart(product)}
                                className="mt-2 bg-blue-600 text-white px-3 py-1 rounded"
                            >
                                Agregar al carrito
                            </button>
                        ) : (
                            <p className="text-red-500 mt-2 font-semibold">Sin stock</p>
                        )}
                    </div>
                ))}
            </div>

            {filtered.length === 0 && (
                <p className="mt-6 text-gray-600">No se encontraron productos.</p>
            )}
        </div>
    );
}
