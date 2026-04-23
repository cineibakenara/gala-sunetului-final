import React from 'react';

function Hero({ data }) {
  return (
    <section id="prezentare">
      <h1 className="hero-title">{data.title}</h1>
      <p className="hero-subtitle">{data.subtitle}</p>
      
      <div className="event-details">
        <div className="detail-item">
          <span>Data & Ora</span>
          <strong>{data.date}</strong>
        </div>
        <div className="detail-item">
          <span>Locație</span>
          <strong>{data.location}</strong>
        </div>
        <div className="detail-item">
          <span>Dress Code</span>
          <strong>{data.dressCode}</strong>
        </div>
      </div>
    </section>
  );
}

export default Hero;