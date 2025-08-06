import React, { useState, useEffect } from 'react';
import './header.css';
import logo from '../../assets/logo.png';
import { Link, useLocation, useNavigate } from "react-router-dom";
import api from '../../../api/api';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const currentPath = location.pathname;
    const [categories, setCategories] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    const isActive = (path) => currentPath.startsWith(path) ? 'active' : '';

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await api.get('/products/categories');
                setCategories(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error al obtener categorías:", error);
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    const handleCategoryClick = (category) => {
        setIsDropdownOpen(false);
        if (category === 'all') {
            navigate('/productos');
        } else {
            navigate(`/productos/categoria/${encodeURIComponent(category)}`);
        }
    };

    const formatCategoryName = (category) => {
        if (typeof category === 'string') {
            return category.charAt(0).toUpperCase() + category.slice(1);
        }
        if (typeof category === 'object' && category.name) {
            return category.name.charAt(0).toUpperCase() + category.name.slice(1);
        }
        return String(category);
    };

    return (
        <header className="encabezado">
            <div className="contenido-encabezado">
                <div className="logo">
                    <Link to="/" className={isActive('/')}>
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <nav className="navegacion">
                    <Link to="/" className={isActive('/')}>Home</Link>
                    <Link to="/quienes-somos" className={isActive('/quienes-somos')}>Quienes Somos</Link>
                    <div className="dropdown-container">
                        <Link 
                            to="/productos" 
                            className={isActive('/productos')}
                            onMouseEnter={() => setIsDropdownOpen(true)}
                        >
                            Productos
                        </Link>
                        
                        {isDropdownOpen && (
                            <div 
                                className="dropdown-menu"
                                onMouseLeave={() => setIsDropdownOpen(false)}
                            >
                                <div 
                                    className="dropdown-item"
                                    onClick={() => handleCategoryClick('all')}
                                >
                                    Ver todos
                                </div>
                                {!loading && categories.map((category, index) => (
                                    <div 
                                        key={typeof category === 'object' ? category.id || index : category}
                                        className="dropdown-item"
                                        onClick={() => handleCategoryClick(typeof category === 'object' ? category.name || category : category)}
                                    >
                                        {formatCategoryName(category)}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <Link to="/contacto" className={isActive('/contacto')}>Contacto</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
