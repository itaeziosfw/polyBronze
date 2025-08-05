// src/components/MapSection.jsx
import React from 'react';

export default function MapSection() {
  return (
    <section
      id="map"
      style={{
        margin: '2rem auto',
        maxWidth: 800,
        textAlign: 'center'
      }}
    >
      <h2>Onde nos Encontrar</h2>
      <p>Para ver nossa localização completa, clique no link abaixo:</p>
      <a
        href="https://maps.app.goo.gl/cfgNAWiBsKZp772K9"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: '1rem',
          padding: '0.75rem 1.5rem',
          background: 'var(--color-primary)',
          color: 'var(--color-secondary)',
          borderRadius: '4px',
          textDecoration: 'none',
          transition: 'background 0.2s'
        }}
        onMouseOver={e => (e.currentTarget.style.background = 'var(--color-accent)')}
        onMouseOut={e => (e.currentTarget.style.background = 'var(--color-primary)')}
      >
        Abrir no Google Maps
      </a>
    </section>
  );
}
