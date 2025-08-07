import React from 'react';

const QuienesSomos = () => {
    return (
        <div className="quienes-somos-container" style={{ maxWidth: '900px', margin: '2rem auto', padding: '1rem 2rem', fontFamily: 'var(--font-family-primary)', color: 'var(--gray-800)' }}>
            <h1 style={{ fontFamily: 'var(--font-family-secondary)', fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '1.5rem', textAlign: 'center' }}>
                Quienes Somos
            </h1>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                Somos una empresa dedicada a ofrecer los mejores productos de tecnología y estilo de vida, comprometidos con la calidad y la satisfacción de nuestros clientes.
            </p>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                Nuestra misión es brindar una experiencia de compra única, con productos innovadores y un servicio al cliente excepcional.
            </p>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.6 }}>
                Contamos con un equipo apasionado y profesional que trabaja día a día para superar las expectativas de nuestros clientes y mantenernos a la vanguardia del mercado.
            </p>
        </div>
    );
};

export default QuienesSomos;
