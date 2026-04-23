import React from 'react';

function AboutUs({ data }) {
  if (!data || !data.team) {
    return null;
  }

  return (
    <section id="despre-noi">
      <h2 className="section-title">Despre Noi</h2>
      
      <div className="about-intro">
        <p>{data.description}</p>
      </div>

      <div className="team-grid">
        {data.team.map((member, index) => (
          <div key={index} className="team-member">
            <h3><span className="role">{member.role}</span> - {member.name}</h3>
            <p>{member.text}</p>
          </div>
        ))}
      </div>

      <div className="sponsors-section">
        <h3 className="section-subtitle">Sponsori & Parteneri</h3>
        <div className="sponsors-grid">
          {data.sponsors.map((sponsor, index) => (
            <div key={index} className="sponsor-item-simple">
              <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo-simple" />
            </div>
          ))}
        </div>
      </div>

      <div className="contact-info">
        <h3>Contact & Social Media</h3>
        <div className="contact-details">
          <p><strong>Email:</strong> <a href={`mailto:${data.email}`}>{data.email}</a></p>
          <p><strong>Telefon CTO:</strong> <a href={`tel:${data.phone}`}>{data.phone}</a></p>
        </div>
        <a href={data.instagram} target="_blank" rel="noopener noreferrer" className="btn-instagram">
          Urmărește-ne pe Instagram
        </a>
      </div>
    </section>
  );
}

export default AboutUs;