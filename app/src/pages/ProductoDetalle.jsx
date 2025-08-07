import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../api/api';
import './ProductoDetalle.css';

const ProductoDetalle = () => {
    const { idProducto } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const response = await api.get(`/products/${idProducto}`);
                setProduct(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [idProducto]);

    if (loading) return <div className="loading">Cargando producto...</div>;
    if (error) return <div className="error">Error: {error}</div>;
    if (!product) return <div className="not-found">Producto no encontrado</div>;

    return (
        <div className="producto-detalle-container">
            <Link to="/productos" className="back-button">← Volver a productos</Link>
            
            <div className="producto-detalle">
                <div className="producto-imagen">
                    <img src={product.thumbnail} alt={product.title} />
                </div>
                
                <div className="producto-info">
                    <h1>{product.title}</h1>
                    <p className="categoria">Categoría: {product.category}</p>
                    <p className="precio">${product.price}</p>
                    <p className="descripcion">{product.description}</p>
                    
                    <div className="producto-detalles">
                        <h3>Detalles:</h3>
                        <ul>
                            <li>Marca: {product.brand || 'No especificada'}</li>
                            <li>Stock: {product.stock} unidades</li>
                            <li>Rating: {product.rating} ⭐</li>
                            <li>Descuento: {product.discountPercentage}%</li>
                        </ul>
                    </div>
                    
                    <button className="add-to-cart-btn">Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
};

export default ProductoDetalle;
