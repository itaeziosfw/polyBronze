
import React from 'react';
import './WhatsAppButton.css';
import whatsappIcon from '../assets/images/watsapp.jpg';


export default function WhatsAppButton() {
  const telefone = '559981164105';
  return (
    <a
      href={`https://wa.me/${telefone}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button pulse"
    >
      <img src={whatsappIcon} alt="WhatsApp" />
    </a>
  );
}
