// import React from 'react';
import { Container } from 'react-bootstrap';
import '../assets/styles/Main.css';

const tourImages = Object.entries(
  import.meta.glob('../assets/img/tours/*.{webp,jpg,jpeg,png}', { eager: true })
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, mod]) => mod.default);

const Tours = () => {
  return (
    <>
      <div id="Tours" className="rem-space"></div>
      <section className="tours-section">
        <Container>
          <h2 className="text-center achv-title">TOURS &amp; TEAM MEMORIES</h2>
          <p className="text-center tours-subtitle">
            Trips and get-togethers with my colleagues.
          </p>

          {tourImages.length > 0 ? (
            <div className="achv-simple-gallery">
              {tourImages.map((src, i) => (
                <div className="achv-simple-tile" key={src}>
                  <img src={src} alt={`Team tour moment ${i + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          ) : (
            <p className="achv-gallery-placeholder">Photos coming soon.</p>
          )}
        </Container>
      </section>
    </>
  );
};

export default Tours;
