// src/components/Services.jsx
import React from 'react';
import './Services.css';

const services = [
  {
    title: 'Bronzeação Express',
    duration: '15 min',
    price: 'R$ 50'
  },
  {
    title: 'Bronzeamento Completo',
    duration: '30 min',
    price: 'R$ 90'
  },
  {
    title: 'Pacote VIP',
    duration: '45 min',
    price: 'R$ 130'
  }
];

export default function Services() {
  return (
    <section id="services">
      <h2>Nossos Pacotes</h2>
      <div className="services__grid">
        {services.map((s, idx) => (
          <div key={idx} className="service__card">
            <h3>{s.title}</h3>
            <p><strong>Duração:</strong> {s.duration}</p>
            <p><strong>Preço:</strong> {s.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
