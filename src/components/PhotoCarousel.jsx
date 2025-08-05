// src/components/PhotoCarousel.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './PhotoCarousel.css';


// importe suas imagens
import slide1 from '../assets/images/slide1.jpg';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';
import slide4 from '../assets/images/slide4.jpg';



export default function PhotoCarousel() {
  const slides = [slide1, slide2, slide3,slide4];

  return (
    <section id="carousel" style={{ padding: '2rem 1rem' }}>
      <Carousel
        infiniteLoop
        autoPlay
        showThumbs={false}
        showStatus={false}
        interval={4000}
      >
        {slides.map((src, i) => (
          <div
            key={i}
            className="carousel-slide-bg"
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </Carousel>
    </section>
  );
}