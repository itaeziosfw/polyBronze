// src/components/WhatsAppButton.jsx
import React from 'react';
import './WhatsAppButton.css';

export default function WhatsAppButton({ phone }) {
  const onlyDigits = phone.replace(/\D/g, '');
  const url = `https://wa.me/${onlyDigits}`;

  return (
    <a
      href={url}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
    >
      {/* Ícone SVG sem fundo */}
      <svg viewBox="0 0 35 32" width="24" height="24" aria-hidden="true">
        <path
          d="M19.9 2.7C12.2 2.7 6 8.6 6 15.6c0 2.1.6 4.2 1.7 6.1L6 29.3l7.9-2.1c1.8 1 3.9 1.6 6 1.6 7.7 0 13.9-5.9 13.9-13.2S27.6 2.7 19.9 2.7zm7.8 19.3c-.3.9-1.8 1.8-2.5 1.9-.7.1-1.6.1-2.5-.2-.9-.3-2-.7-3.5-1.5-3.1-1.6-5-4.4-5.2-4.6-.2-.2-1.2-1.7-1.2-3.3s.8-2.3 1.2-2.6c.3-.4.9-.5 1.1-.5h.8c.3 0 .6 0 .9.7.4.9.8 2.1.9 2.3.1.2.1.3 0 .5-.2.2-.4.4-.6.7-.3.3-.4.5-.2.8.2.4.9 1.5 1.9 2.4 1.2 1.2 2.3 1.6 2.7 1.7.4.1.6 0 .8-.3.2-.3.7-.8.9-1 .2-.2.5-.2.8-.1l1.1.5c.4.2.9.4 1.1.7.2.3.2.8 0 1.2z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
}
