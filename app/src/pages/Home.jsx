import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/api';

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
        <div className="home-container">
            <section className="hero">
                <h1>Bienvenidos a nuestra Tienda Online</h1>
                <p>Descubre los mejores productos al mejor precio</p>
            </section>

            <section className="featured-products">
                <h2>Productos Destacados</h2>
                <div className="products-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <Link to={`/productos/${product.id}`}>
                                <img src={product.thumbnail} alt={product.title} />
                                <h3>{product.title}</h3>
                                <p className="price">${product.price}</p>
                            </Link>
                        </div>
                    ))}
                </div>
                <Link to="/productos" className="view-all-btn">Ver todos los productos</Link>
            </section>

            <section className="categories">
                <h2>Categorías</h2>
                <div className="categories-grid">
                    {categories.slice(0, 6).map((category) => (
                        <Link 
                            key={category} 
                            to={`/productos/categoria/${category}`}
                            className="category-card"
                        >
                            <h3>{typeof category === 'string' ? 
                                category.split('-').map(word => 
                                    word.charAt(0).toUpperCase() + word.slice(1)
                                ).join(' ') 
                                : String(category).charAt(0).toUpperCase() + String(category).slice(1)}</h3>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
