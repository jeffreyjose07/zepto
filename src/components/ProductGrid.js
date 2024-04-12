import React from 'react';
import { ProductCard } from './ProductCard';

export const ProductGrid = () => {
    const products = [
        { image: 'amul-taaza.jpg', title: 'Amul Taaza Toned Fresh Milk (Pouch)', price: 54 },
        // Add more product data here
    ];

    return (
        <div className="product-grid">
            {products.map((product, index) => (
                <ProductCard
                    key={index}
                    image={product.image}
                    title={product.title}
                    price={product.price} />
            ))}
        </div>
    );
};
