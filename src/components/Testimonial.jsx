import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Testimonial.css';

const testimonials = [
  {
    name: 'Mariana S.',
    quote: 'Adorei o atendimento e meu bronzeado ficou incrível!',
  },
  {
    name: 'Geovana M.',
    quote: 'Ótima estrutura, equipe super profissional. Recomendo!',
  },
  {
    name: 'Ana Paula.',
    quote: 'Ambiente agradável e serviço de primeira. Voltarei sempre!',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials">
      <h2>O que dizem sobre nós</h2>
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={5000}
      >
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial__card">
            <p className="testimonial__quote">“{t.quote}”</p>
            <p className="testimonial__name">— {t.name}</p>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
