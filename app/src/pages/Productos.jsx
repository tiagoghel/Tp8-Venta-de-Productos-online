import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/api';
import CardProducto from '../components/CardProducto';

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
        <div className="productos-container" style={{ maxWidth: '1200px', margin: '2rem auto', padding: '0 1rem' }}>
            <h1 style={{ color: '#007AFF', marginBottom: '1.5rem' }}>{idCategoria ? `Productos en ${idCategoria}` : 'Todos los Productos'}</h1>
            
            <div className="productos-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
                {products.map((product) => (
                    <CardProducto key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Productos;
