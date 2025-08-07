import React, { useState, useEffect } from 'react';
import api from '../../api/api';
import CardProducto from '../components/CardProducto';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [productsResponse, categoriesResponse] = await Promise.all([
                    api.get('/products?limit=8'),
                    api.get('/products/categories')
                ]);
                
                setProducts(productsResponse.data.products);
                setCategories(categoriesResponse.data);
                setLoading(false);
            } catch (error) {
                console.error("Error al obtener datos:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div className="loading">Cargando...</div>;

    return (
        <div className="home-container" style={{ backgroundColor: '#f0f4f8', minHeight: '100vh', padding: '2rem' }}>
            <section className="hero" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 style={{ color: '#007AFF', fontSize: '3rem', marginBottom: '1rem' }}>Bienvenidos a nuestra Tienda Online</h1>
                <p style={{ fontSize: '1.25rem', color: '#333' }}>Descubre los mejores productos al mejor precio</p>
            </section>

            <section className="featured-products" style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: '#007AFF', fontSize: '2rem', marginBottom: '1.5rem' }}>Productos Destacados</h2>
                <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
                    {products.map((product) => (
                        <CardProducto key={product.id} product={product} />
                    ))}
                </div>
                <a href="/productos" className="view-all-btn" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.75rem 1.5rem', backgroundColor: '#007AFF', color: '#fff', borderRadius: '0.375rem', textDecoration: 'none', fontWeight: '600', transition: 'background-color 0.3s ease' }}>
                    Ver todos los productos
                </a>
            </section>

            <section className="categories" style={{ marginBottom: '3rem' }}>
                <h2 style={{ color: '#007AFF', fontSize: '2rem', marginBottom: '1.5rem' }}>Categorías</h2>
                <div className="categories-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1.5rem' }}>
                    {categories.slice(0, 6).map((category) => (
                        typeof category === 'string' && (
                            <a 
                                key={category} 
                                href={`/productos/categoria/${category}`}
                                className="category-card"
                                style={{ backgroundColor: '#e0f0ff', borderRadius: '0.5rem', padding: '1rem', textAlign: 'center', color: '#007AFF', fontWeight: '600', textDecoration: 'none', cursor: 'pointer', transition: 'background-color 0.3s ease, color 0.3s ease' }}
                                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#007AFF'; e.currentTarget.style.color = '#fff'; }}
                                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#e0f0ff'; e.currentTarget.style.color = '#007AFF'; }}
                            >
                                <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                            </a>
                        )
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
