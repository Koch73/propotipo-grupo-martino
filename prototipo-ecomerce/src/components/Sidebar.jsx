// src/components/Sidebar.jsx
import React, { useState } from 'react';

export default function Sidebar({ filters, setFilters }) {
  const categorias = ['Aires Acondicionados', 'Heladeras', 'Freezers', 'Repuestos'];

  const handleCategoryChange = (cat) => {
    setFilters((prev) => ({ ...prev, category: cat }));
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <aside className="w-full md:w-64 p-4 border-r bg-gray-50">
      <h2 className="text-xl font-bold mb-4">Filtros</h2>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Categorías</h3>
        <ul className="space-y-2">
          {categorias.map((cat) => (
            <li key={cat}>
              <button
                className={`block w-full text-left ${filters.category === cat ? 'text-blue-600 font-bold' : 'text-gray-700'
                  } hover:text-blue-500`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Precio</h3>
        <div className="flex items-center gap-2">
          <input
            type="number"
            name="minPrice"
            placeholder="Desde"
            value={filters.minPrice || ''}
            onChange={handlePriceChange}
            className="border p-1 w-20"
          />
          <span>-</span>
          <input
            type="number"
            name="maxPrice"
            placeholder="Hasta"
            value={filters.maxPrice || ''}
            onChange={handlePriceChange}
            className="border p-1 w-20"
          />
        </div>
      </div>
    </aside>
  );
}
