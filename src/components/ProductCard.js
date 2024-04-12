import React from 'react';

export const ProductCard = ({ image, title, price }) => {
    return (
        <div className="product-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <div className="price">₹{price}</div>
            <a href="#" className="add-to-cart">Add</a>
        </div>
    );
};
