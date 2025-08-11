// src/components/Services.jsx
import React from 'react'
import './Services.css'

const services = [
  {
    title: 'Bronze completo no sol',
    description: 'com descoloração mas hidratação',
    price: 'R$ 90,00',
  },
  {
    title: 'Bronze simples no sol',
    description: 'sem descoloração',
    price: 'R$ 70,00',
  },
  {
    title: 'Bronze na máquina simples',
    description: 'com esfoliação',
    price: 'R$ 120,00',
  },
  {
    title: 'Bronze na máquina completo',
    description: 'com banho de lua clareador',
    price: 'R$ 150,00',
  },
  {
    title: 'Bronze na máquina e sol',
    description: 'com descoloração',
    price: 'R$ 170,00',
  },
  {
    title: 'Banho de lua clareador',
    description: '',
    price: 'R$ 80,00',
  },
  {
    title: 'Só descoloração',
    description: '',
    price: 'R$ 40,00',
  },
  {
    title: 'Clareamento de áreas',
    description: '',
    price: 'R$ 30,00',
  },
  {
    title: 'Decapágio',
    description:
      'Clareia áreas, descolori, esfolia e hidrata a pele ☀️',
    price: 'R$ 90,00',
  },
]

export default function Services() {
  return (
    <section id="services">
      <h2>Nossos Pacotes</h2>
      <div className="services__grid">
        {services.map((s, idx) => (
          <div key={idx} className="service__card">
            <h3>{s.title}</h3>
            {s.description && <p>{s.description}</p>}
            <p className="service__price">{s.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
