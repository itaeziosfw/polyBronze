// src/components/Contact.jsx
import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    
    setStatus('SENDING');

    const data = new FormData(form);
    const res = await fetch('https://formspree.io/f/xdkdwavl', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: data
    });

    if (res.ok) {
      setStatus('SUCCESS');
      form.reset();
    } else {
      setStatus('FAILED');
    }
  };

  return (
    <section id="contato">
      <h2>Fale Conosco</h2>
      <form onSubmit={handleSubmit} className="contact__form">
        <input type="text" name="name" placeholder="Seu nome" required />
        <input type="email" name="email" placeholder="Seu e-mail" required />
        <textarea name="message" rows="5" placeholder="Sua mensagem" required />
        <button type="submit">
          {status === 'SENDING'
            ? 'Enviando...'
            : status === 'SUCCESS'
            ? 'Enviado ✅'
            : status === 'FAILED'
            ? 'Erro 😢'
            : 'Enviar Mensagem'}
        </button>
      </form>
      {status === 'SUCCESS' && (
        <p className="success">Mensagem enviada com sucesso! 😊</p>
      )}
      {status === 'FAILED' && (
        <p className="error">Falha ao enviar. Tente novamente mais tarde.</p>
      )}
    </section>
  );
}
