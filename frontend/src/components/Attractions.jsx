import React from 'react';

function Attractions({ items, localArtists }) {
  return (
    <section id="atractii">
      <h2 className="section-title">Atracții & Standuri</h2>
      <div className="grid-container">
        
        <div className="program-box">
          <h3>Program Artistic</h3>
          {items.map((item) => (
            <div key={item.id} className="program-item">
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="program-box">
          <h3>Corner-ul Artiștilor Locali</h3>
          {localArtists.map((artist) => (
            <div key={artist.id} className="program-item">
              <strong>{artist.title}</strong>
              <p>{artist.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Attractions;