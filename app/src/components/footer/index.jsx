import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Contacto</h3>
                    <p>Email: info@tiendaonline.com</p>
                    <p>Teléfono: +1 (555) 123-4567</p>
                </div>
                <div className="footer-section">
                    <h3>Síguenos</h3>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook">Facebook</a>
                        <a href="#" aria-label="Twitter">Twitter</a>
                        <a href="#" aria-label="Instagram">Instagram</a>
                    </div>
                </div>
                <div className="footer-section">
                    <h3>Enlaces Rápidos</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/quienes-somos">Quienes Somos</a></li>
                        <li><a href="/productos">Productos</a></li>
                        <li><a href="/contacto">Contacto</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <p>&copy; 2025 Tienda Online. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
