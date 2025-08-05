import React from 'react';


export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__intro">
        <h2>Sobre Nós</h2>
        <p>
          Na PolyBronze, oferecemos o melhor serviço de bronzeamento com
          equipamentos modernos e equipe qualificada. Nosso espaço foi
          pensado para seu conforto e segurança, proporcionando uma
          experiência única para realçar sua beleza.
        </p>
      </div>
      <div className="about__cards">
        <div className="about__card">
          <h3>Missão</h3>
          <p>Proporcionar autoestima e bem-estar por meio de um bronzeado saudável e seguro.</p>
        </div>
        <div className="about__card">
          <h3>Visão</h3>
          <p>Ser referência em bronzeamento profissional, inovando sempre em técnicas e atendimento.</p>
        </div>
        <div className="about__card">
          <h3>Valores</h3>
          <p>Compromisso com a segurança, respeito ao cliente e excelência em cada sessão.</p>
        </div>
      </div>
    </section>
  );
}
