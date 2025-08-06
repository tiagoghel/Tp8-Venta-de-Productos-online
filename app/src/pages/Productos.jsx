import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../api/api';

const Productos = () => {
    const { idCategoria } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                let url = '/products';
                
                if (idCategoria) {
                    url = `/products/category/${idCategoria}`;
                }
                
                const response = await api.get(url);
                setProducts(response.data.products || response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProducts();
    }, [idCategoria]);

    if (loading) return <div className="loading">Cargando productos...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div className="productos-container">
            <h1>{idCategoria ? `Productos en ${idCategoria}` : 'Todos los Productos'}</h1>
            
            <div className="productos-grid">
                {products.map((product) => (
                    <div key={product.id} className="producto-card">
                        <Link to={`/productos/${product.id}`}>
                            <img src={product.thumbnail} alt={product.title} />
                            <h3>{product.title}</h3>
                            <p className="price">${product.price}</p>
                            <p className="description">{product.description.substring(0, 100)}...</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Productos;
