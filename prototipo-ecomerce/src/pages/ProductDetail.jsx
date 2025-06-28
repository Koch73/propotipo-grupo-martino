// src/pages/ProductDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        // Simular fetch desde backend
        const fakeFetchProduct = async () => {
            const data = {
                id: parseInt(id),
                name: 'Aire Acondicionado Split 3000 Frigorías',
                price: 295000,
                description: 'Modelo frío/calor, eficiencia energética A+.',
                image: '../../public/aire_acondicionado',
                stock: 5,
            };
            setProduct(data);
        };

        fakeFetchProduct();
    }, [id]);

    const handleAdd = () => {
        if (product && product.stock > 0) {
            addToCart({ ...product, quantity });
        }
    };

    if (!product) return <p className="p-4">Cargando producto...</p>;

    return (
        <div className="flex flex-col md:flex-row p-6 gap-6">
            <img src={product.image} alt={product.name} className="w-full md:w-1/2 object-contain" />
            <div className="flex-1">
                <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
                <p className="text-gray-700 text-lg mb-2">${product.price}</p>
                <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                {product.stock > 0 ? (
                    <>
                        <div className="mb-4">
                            <label className="mr-2">Cantidad:</label>
                            <input
                                type="number"
                                min={1}
                                max={product.stock}
                                value={quantity}
                                onChange={(e) => setQuantity(parseInt(e.target.value))}
                                className="border p-1 w-16"
                            />
                        </div>
                        <button
                            onClick={handleAdd}
                            className="bg-blue-600 text-white px-4 py-2 rounded"
                        >
                            Agregar al carrito
                        </button>
                    </>
                ) : (
                    <p className="text-red-600 font-semibold">Sin stock disponible</p>
                )}
            </div>
        </div>
    );
}
