import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <Link to={`/productos/${product.id}`}>
                <img src={product.thumbnail} alt={product.title} />
                <h3>{product.title}</h3>
                <p className="price">${product.price}</p>
            </Link>
        </div>
    );
};

export default ProductCard;
