import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaSitemap, FaTachometerAlt, FaUsers } from 'react-icons/fa';

function Home() {
  useEffect(() => {
    // Set the hero background image as a CSS variable
    document.documentElement.style.setProperty(
      '--hero-bg-image',
      `url('${process.env.PUBLIC_URL || ''}/imgs/hero-background.png')`
    );
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className='hero-header'>
              <h1 className="hero-headline hero-headline-1">Making your business <span>easier to run</span></h1>
              <p className="hero-subheadline">
              I help agencies and entrepreneurs develop and codify their operational infrastructure to streamline processes for sustained success.
            </p>
            </div>
          </div>
          <div className="hero-stats">
            <div className="hero-stat-card hero-stat-left logo-ticker">
              <div className="logo-ticker-header"><span>Two decades</span> of experience inside complex, high-performing organizations</div>
              <div className="logo-ticker-wrapper">
                <div className="logo-ticker-track">
                  <div className="logo-ticker-item">
                    <img src="/imgs/brand_logos/fox.png" alt="20th Century Fox" className="brand-logo" />
                  </div>
                  <div className="logo-ticker-item">
                    <img src="/imgs/brand_logos/disney.png" alt="Disney" className="brand-logo" />
                  </div>
                  <div className="logo-ticker-item">
                    <img src="/imgs/brand_logos/GM.png" alt="GM" className="brand-logo" />
                  </div>
                  <div className="logo-ticker-item">
                    <img src="/imgs/brand_logos/P&G_logo.png" alt="P&G" className="brand-logo" />
                  </div>
                  <div className="logo-ticker-item">
                    <img src="/imgs/brand_logos/pfizer.svg" alt="Pfizer" className="brand-logo" />
                  </div>
                  <div className="logo-ticker-item">
                    <img src="/imgs/brand_logos/att.svg" alt="AT&T" className="brand-logo" />
                  </div>
                  <div className="logo-ticker-item">
                    <img src="/imgs/brand_logos/wynn.svg" alt="Wynn Resorts" className="brand-logo" />
                  </div>
                  <div className="logo-ticker-item">
                    <img src="/imgs/brand_logos/fourseasons.png" alt="Four Seasons Resorts" className="brand-logo" />
                  </div>
                  <div className="logo-ticker-item">
                    <img src="/imgs/brand_logos/ritz.png" alt="Ritz-Carlton" className="brand-logo" />
                  </div>
                  {/* Duplicate for seamless loop */}
                  <div className="logo-ticker-item">
                    <img src="/imgs/brand_logos/fox.png" alt="20th Century Fox" className="brand-logo" />
                  </div>
                  <div className="logo-ticker-item">
                    <img src="/imgs/brand_logos/disney.png" alt="Disney" className="brand-logo" />
                  </div>
                  <div className="logo-ticker-item">
                    <img src="/imgs/brand_logos/GM.png" alt="GM" className="brand-logo" />
                  </div>
                  <div className="logo-ticker-item">
                    <img src="/imgs/brand_logos/P&G_logo.png" alt="P&G" className="brand-logo" />
                  </div>
                  <div className="logo-ticker-item">
                    <img src="/imgs/brand_logos/pfizer.svg" alt="Pfizer" className="brand-logo" />
                  </div>
                  <div className="logo-ticker-item">
                    <img src="/imgs/brand_logos/att.svg" alt="AT&T" className="brand-logo" />
                  </div>
                  <div className="logo-ticker-item">
                    <img src="/imgs/brand_logos/wynn.svg" alt="Wynn Resorts" className="brand-logo" />
                  </div>
                  <div className="logo-ticker-item">
                    <img src="/imgs/brand_logos/fourseasons.png" alt="Four Seasons Resorts" className="brand-logo" />
                  </div>
                  <div className="logo-ticker-item">
                    <img src="/imgs/brand_logos/ritz.png" alt="Ritz-Carlton" className="brand-logo" />
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-stat-right">
              <div className="hero-buttons">
                <Link to="/contact" className="btn btn-primary">
                  Request a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About/Feature Cards Section */}
      <section className="about-features-section">
        <h2 className="section-headline-centered">You've Built a Growing Business. So Why Are Things Feeling Harder Than Ever?</h2>
    <p className="section-subheadline" >
      This is often the transition from a business that runs on momentum to one that needs to run on structure. What worked early on starts to need a more intentional shape.
    </p>
        <div className="container">
          <div className="feature-cards-grid">
            {/* Top-left: Header */}
            <div className="feature-card feature-card-header">
              <h2 className="feature-card-title">Growth shouldn’t make your business harder to manage.</h2>
            </div>
            
            {/* Top-right: Text content */}
            <div className="feature-card feature-card-medium">
              <p className="feature-card-text">
                <span>As businesses grow, internal systems often fail to keep pace.</span> Processes evolve informally. Decisions slow down. Bottlenecks appear. Work becomes fragmented, and the cost of coordination increases.
              </p>
               <p className="feature-card-text">
                The result isn't failure, it's friction. And over time, that strain makes growth feel heavier than it should.
              </p>
              <p className="feature-card-text">
                I help businesses put the right foundations in place so scaling feels controlled instead of chaotic.
              </p>
            </div>
            
            {/* Bottom-left: Operational stability content */}
            <div className="feature-card feature-card-accent-dark">
              <div className="feature-card-text">
                <p>What is my role?</p>
                <p><FaShieldAlt className="feature-card-icon" /> Stabilize day-to-day operations</p>
                <p><FaSitemap className="feature-card-icon" /> Clarify how work moves through the organization</p>
                <h2 className="feature-card-title light-card-title">Operational stability for growing teams.</h2>
                <p><FaTachometerAlt className="feature-card-icon" /> Reduce bottlenecks and unnecessary friction</p>
                <p><FaUsers className="feature-card-icon" /> Relieve pressure across teams</p>
              </div>
            </div>
            
            {/* Bottom-right: Image */}
            <div className='feature-card feature-card-img-container'>
              <img className='feature-card-img' src='/imgs/how_dinar.jpg' alt='' />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section - How I Work Preview */}
     <section className="why-choose-section why-choose-tile-section">
  <div className="container">
    <h2 className="section-headline-centered">My Approach: Focused. Deliberate. Effective.</h2>
    <p className="section-subheadline" style={{ marginBottom: "1rem" }}>
      I work with businesses that have reached a point where growth has outpaced internal structure.
The goal isn’t to add complexity — it’s to bring clarity, consistency, and breathing room back into the day-to-day.
    </p>
    <p className="section-subheadline" style={{ marginBottom: "2rem" }}>
      I believe in a core progression, adapted to the realities of your team, your clients, and your stage of growth:
    </p>

    <div className="why-choose-tile-list">
      {/* 1 */}
      <div className="why-choose-tile">
        <div className="why-choose-tile-number" aria-hidden="true">
          <p>1</p>
        </div>
        <div className="why-choose-tile-content">
          <h3 className="why-choose-tile-title">See how work actually flows</h3>
          <p className='why-choose-tile-subtitle'>Surface the real operating picture before changing anything.</p>
          <p className="why-choose-tile-text">
            I look beyond org charts and tools to understand how decisions are made, how priorities shift, and where work slows down or gets stuck.
          </p>
        </div>
      </div>

      {/* 2 */}
      <div className="why-choose-tile">
        <div className="why-choose-tile-number" aria-hidden="true">2</div>
        <div className="why-choose-tile-content">
          <h3 className="why-choose-tile-title">Address the biggest pressure points</h3>
          <p className='why-choose-tile-subtitle'>Fix the few things that create the most drag.</p>
          <p className="why-choose-tile-text">
            We focus on the small number of issues creating the most friction — unclear ownership, broken handoffs, and inconsistent prioritization.
          </p>
        </div>
      </div>

      {/* 3 */}
      <div className="why-choose-tile">
        <div className="why-choose-tile-number" aria-hidden="true">3</div>
        <div className="why-choose-tile-content">
          <h3 className="why-choose-tile-title">Make the essentials repeatable</h3>
          <p className='why-choose-tile-subtitle'>Turn experience into something the team can rely on.</p>
          <p className="why-choose-tile-text">
            Key workflows and expectations are turned into simple, usable standards the team can rely on.
          </p>
        </div>
      </div>

      {/* 4 */}
      <div className="why-choose-tile">
        <div className="why-choose-tile-number" aria-hidden="true">4</div>
        <div className="why-choose-tile-content">
          <h3 className="why-choose-tile-title">Create room to grow</h3>
          <p className='why-choose-tile-subtitle'>Reduce overload and restore capacity.</p>
          <p className="why-choose-tile-text">
            We reduce overload and restore capacity so growth feels intentional instead of reactive.
          </p>
        </div>
      </div>
    </div>

    <div className="why-choose-tile-footer">
      <h3 className="why-choose-tile-footer-text">
        Curious for more details about my process?
      </h3>
      <Link to="/how-i-work" className="btn btn-secondary">
        Learn How I Work
      </Link>
    </div>
  </div>
</section>


      {/* Combined Services Preview and Footer CTA Section */}
      <section className="combined-cta-section">
        {/* Services Preview - Left Side */}
        <div className="services-preview-half">
          <div className="services-preview-background">
            <img 
              src='/imgs/flexible-ways-to-engage.jpg' 
              alt="Business consultation and services" 
              className="services-preview-bg-image"
            />
            <div className="services-preview-overlay">
              <div className="container">
                <h2 className="section-headline-centered services-preview-headline">Flexible ways to engage</h2>
                <p className="services-preview-text">
                  Engagements range from focused 30-day projects to ongoing support and embedded leadership, depending on your needs.
                </p>
                <Link to="/services" className="btn btn-secondary services-home-btn">
                  View Services & Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA - Right Side */}
        <div className="footer-cta-half">
          <div className="footer-cta-background">
            <img 
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop" 
              alt="Business consultation" 
              className="footer-cta-bg-image"
            />
            <div className="footer-cta-overlay">
              <div className="container">
                <h2 className="footer-cta-headline">If growth is creating internal strain, we should talk.</h2>
                <p className="footer-cta-text">
                  Let's discuss how to streamline your operations and make scaling feel manageable instead of chaotic.
                </p>
                <div className="footer-cta-form" style={{justifyContent: 'center'}}>
                  <Link to="/contact" className="btn btn-primary footer-cta-btn">
                    Request a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
