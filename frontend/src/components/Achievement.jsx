// import React from 'react';
import { Container } from 'react-bootstrap';
import heroImg from '../assets/img/promptwars/hackathon-vignesh.webp';
import bannerImg from '../assets/img/promptwars/prompt_wars_banner.webp';
import buildingImg from '../assets/img/promptwars/building-view.webp';
import entranceImg from '../assets/img/promptwars/outside_place_entrance.webp';
import evalImg from '../assets/img/promptwars/evaluation-framework.webp';
import venueImg from '../assets/img/promptwars/hackathon_place_inner.webp';
import goodiesImg from '../assets/img/promptwars/promptwars_goodies.webp';
import '../assets/styles/Main.css';

const devfestImages = Object.entries(
  import.meta.glob('../assets/img/devfest/*.{webp,jpg,jpeg,png}', { eager: true })
)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, mod]) => mod.default);

const galleryImages = [
  { src: heroImg, alt: 'Building the PromptWars submission at the venue', className: 'achv-tile-hero' },
  { src: bannerImg, alt: 'PromptWars event banner by Google for Developers and Hack2Skill', className: 'achv-tile-banner' },
  { src: buildingImg, alt: 'Venue lobby artwork', className: 'achv-tile-building' },
  { src: entranceImg, alt: 'Entrance of the hackathon venue', className: 'achv-tile-entrance' },
  { src: evalImg, alt: 'Evaluation framework presented on screen', className: 'achv-tile-eval' },
  { src: venueImg, alt: 'Participants working at the hackathon venue', className: 'achv-tile-venue' },
  { src: goodiesImg, alt: 'PromptWars goodies and swag', className: 'achv-tile-goodies' },
];

const rounds = [
  {
    label: 'PromptWars — In-Person/Offline',
    appName: 'Steady',
    detail: 'A recovery support platform for people navigating substance use disorders and the people who care for them. Built in 3 hours using Antigravity and Claude Opus.',
    rank: 'Top 15',
    outOf: 'of 95',
  },
  {
    label: 'PromptWars — Virtual',
    appName: 'FIFA Nexus Twin',
    detail: 'A GenAI-powered crisis simulation and command dashboard for FIFA World Cup 2026 venue operations staff. Built over two weeks working with an AI agent.',
    rank: '#445',
    outOf: 'of 1713',
  },
];

const Achievement = () => {
  return (
    <>
      <div id="Hackathon" className="rem-space"></div>
      <section className="achv-section">
        <Container>
          <h2 className="text-center achv-title">HACKATHONS &amp; EVENTS</h2>

          <div className="achv-grid">
            <div className="achv-gallery">
              {galleryImages.map((img, i) => (
                <div className={`achv-tile ${img.className} achv-delay-${i}`} key={img.src}>
                  <img src={img.src} alt={img.alt} loading="lazy" />
                </div>
              ))}
            </div>

            <div className="achv-content">
              <span className="about-eyebrow">GOOGLE FOR DEVELOPERS × HACK2SKILL</span>
              <h3 className="achv-heading">PromptWars — Build, Pitch &amp; Win in a Day</h3>
              <p className="achv-bio">
                Competed in PromptWars, a nationwide AI hackathon series by Google for Developers
                and Hack2Skill, across two independent hackathons &mdash; an in-person/offline
                edition and a separate virtual edition.
              </p>

              <div className="achv-rounds">
                {rounds.map((round) => (
                  <div className="achv-round-card" key={round.label}>
                    <div className="achv-round-header">
                      <span className="achv-round-label">{round.label}</span>
                      <span className="achv-round-app">{round.appName}</span>
                    </div>
                    <p className="achv-round-detail">{round.detail}</p>
                    <div className="achv-round-rank">
                      <span className="achv-rank-value">{round.rank}</span>
                      <span className="achv-rank-outof">{round.outOf}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="achv-subsection">
            <span className="about-eyebrow">GOOGLE FOR DEVELOPERS</span>
            <h3 className="achv-heading">Google DevFest 2025</h3>
            <p className="achv-bio">
              Attended DevFest 2025, connecting with the developer community and catching up on
              the latest across web, cloud, and AI.
            </p>

            {devfestImages.length > 0 ? (
              <div className="achv-simple-gallery">
                {devfestImages.map((src, i) => (
                  <div className="achv-simple-tile" key={src}>
                    <img src={src} alt={`Google DevFest 2025 moment ${i + 1}`} loading="lazy" />
                  </div>
                ))}
              </div>
            ) : (
              <p className="achv-gallery-placeholder">Photos coming soon.</p>
            )}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Achievement;
