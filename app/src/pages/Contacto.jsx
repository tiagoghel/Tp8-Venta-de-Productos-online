import React from 'react';
import './Contacto.css';

const Contacto = () => {
    return (
        <div className="contacto-container">
            <h1>Contacto</h1>
            <div className="contacto-content">
                <div className="contacto-info">
                    <h2>Información de Contacto</h2>
                    <p>
                        <strong>Email:</strong> contacto@tiendaonline.com
                    </p>
                    <p>
                        <strong>Teléfono:</strong> +54 11 1234-5678
                    </p>
                    <p>
                        <strong>Dirección:</strong> Buenos Aires, Argentina
                    </p>
                </div>
                
                <div className="contacto-form">
                    <h2>Formulario de Contacto</h2>
                    <form>
                        <div className="form-group">
                            <label>Nombre:</label>
                            <input type="text" name="nombre" required />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label>Mensaje:</label>
                            <textarea name="mensaje" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Enviar Mensaje</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacto;
