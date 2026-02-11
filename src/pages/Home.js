import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaSitemap, FaTachometerAlt, FaUsers } from 'react-icons/fa';

function Home() {
  useEffect(() => {
    // Set the hero and feature-card-header background images as CSS variables
    const base = process.env.PUBLIC_URL || '';
    document.documentElement.style.setProperty('--hero-bg-image', `url('${base}/imgs/hero-background.png')`);
    document.documentElement.style.setProperty('--feature-card-header-bg', `url('${base}/imgs/overhead-laptops-desk.jpg')`);
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-header">
              <h1 className="hero-headline hero-headline-1">Making your business <span>easier to run</span></h1>
              <p className="hero-subheadline">
                I help agencies and entrepreneurs develop and codify their operational infrastructure to streamline processes for sustained success.
              </p>
            </div>
          </div>
          <div className="hero-stats">
            <div className="hero-stat-card hero-stat-left logo-ticker">
              <div className="logo-ticker-header"><span>Two decades</span> of experience with complex, high-performing organizations</div>
              <div className="logo-ticker-wrapper">
                <div className="logo-ticker-track">
                  <div className="logo-ticker-item">
                    <img src={`${process.env.PUBLIC_URL || ''}/imgs/brand_logos/fox.png`} alt="20th Century Fox" className="brand-logo" />
                  </div>
                  <div className="logo-ticker-item">
                    <img src={`${process.env.PUBLIC_URL || ''}/imgs/brand_logos/disney.png`} alt="Disney" className="brand-logo" />
                  </div>
                  <div className="logo-ticker-item">
                    <img src={`${process.env.PUBLIC_URL || ''}/imgs/brand_logos/GM.png`} alt="GM" className="brand-logo" />
                  </div>
                  <div className="logo-ticker-item">
                    <img src={`${process.env.PUBLIC_URL || ''}/imgs/brand_logos/P&G_logo.png`} alt="P&G" className="brand-logo" />
                  </div>
                  <div className="logo-ticker-item">
                    <img src={`${process.env.PUBLIC_URL || ''}/imgs/brand_logos/pfizer.svg`} alt="Pfizer" className="brand-logo" />
                  </div>
                  <div className="logo-ticker-item">
                    <img src={`${process.env.PUBLIC_URL || ''}/imgs/brand_logos/att.svg`} alt="AT&T" className="brand-logo" />
                  </div>
                  <div className="logo-ticker-item">
                    <img src={`${process.env.PUBLIC_URL || ''}/imgs/brand_logos/wynn.svg`} alt="Wynn Resorts" className="brand-logo" />
                  </div>
                  <div className="logo-ticker-item">
                    <img src={`${process.env.PUBLIC_URL || ''}/imgs/brand_logos/fourseasons.png`} alt="Four Seasons Resorts" className="brand-logo" />
                  </div>
                  <div className="logo-ticker-item">
                    <img src={`${process.env.PUBLIC_URL || ''}/imgs/brand_logos/ritz.png`} alt="Ritz-Carlton" className="brand-logo" />
                  </div>
                  {/* Duplicate for seamless loop */}
                  <div className="logo-ticker-item">
                    <img src={`${process.env.PUBLIC_URL || ''}/imgs/brand_logos/fox.png`} alt="20th Century Fox" className="brand-logo" />
                  </div>
                  <div className="logo-ticker-item">
                    <img src={`${process.env.PUBLIC_URL || ''}/imgs/brand_logos/disney.png`} alt="Disney" className="brand-logo" />
                  </div>
                  <div className="logo-ticker-item">
                    <img src={`${process.env.PUBLIC_URL || ''}/imgs/brand_logos/GM.png`} alt="GM" className="brand-logo" />
                  </div>
                  <div className="logo-ticker-item">
                    <img src={`${process.env.PUBLIC_URL || ''}/imgs/brand_logos/P&G_logo.png`} alt="P&G" className="brand-logo" />
                  </div>
                  <div className="logo-ticker-item">
                    <img src={`${process.env.PUBLIC_URL || ''}/imgs/brand_logos/pfizer.svg`} alt="Pfizer" className="brand-logo" />
                  </div>
                  <div className="logo-ticker-item">
                    <img src={`${process.env.PUBLIC_URL || ''}/imgs/brand_logos/att.svg`} alt="AT&T" className="brand-logo" />
                  </div>
                  <div className="logo-ticker-item">
                    <img src={`${process.env.PUBLIC_URL || ''}/imgs/brand_logos/wynn.svg`} alt="Wynn Resorts" className="brand-logo" />
                  </div>
                  <div className="logo-ticker-item">
                    <img src={`${process.env.PUBLIC_URL || ''}/imgs/brand_logos/fourseasons.png`} alt="Four Seasons Resorts" className="brand-logo" />
                  </div>
                  <div className="logo-ticker-item">
                    <img src={`${process.env.PUBLIC_URL || ''}/imgs/brand_logos/ritz.png`} alt="Ritz-Carlton" className="brand-logo" />
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
        <p className="section-subheadline">
          There’s a point where growth quietly changes the nature of a business. What once ran on momentum starts to demand structure. More clients add complexity. New partners and hires introduce dependencies. The stakes rise, and the margin for improvisation gets smaller.
        </p>
        <div className="container">
          <div className="feature-cards-grid">
            <div className="feature-card feature-card-header">
              <h2 className="feature-card-title">Growth shouldn’t make your business harder to manage.</h2>
            </div>
            <div className="feature-card feature-card-medium">
              <p className="feature-card-text">
                <span>At a certain stage, effort stops being the limiting factor.</span> Brute force isn’t enough to keep up. What matters instead is how work actually moves through the organization.
              </p>
               <p className="feature-card-text">
                Without that clarity, teams start compensating. Founders step in more often. Fixes are made on the fly rather than by design.
              </p>
              <p className="feature-card-text">
                That’s the moment when the business needs help operationalizing how it works, not just pushing harder. That’s where I come in.
              </p>
            </div>
            <div className="feature-card feature-card-accent-dark">
              <div className="feature-card-text">
                <p>What is my role?</p>
                <p><FaShieldAlt className="feature-card-icon" /> Stabilize day-to-day operations</p>
                <p><FaSitemap className="feature-card-icon" /> Clarify how work moves through the organization</p>
                <h2 className="feature-card-title light-card-title">Operational stability for growing teams.</h2>
                <p><FaTachometerAlt className="feature-card-icon" /> Reduce bottlenecks and unnecessary friction</p>
                <p><FaUsers className="feature-card-icon" /> Relieve pressure across teams so capacity returns</p>
              </div>
            </div>
            <div className="feature-card feature-card-img-container">
              <img className="feature-card-img" src={`${process.env.PUBLIC_URL || ''}/imgs/how_dinar.jpg`} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section - How I Work Preview */}
     <section className="why-choose-section why-choose-tile-section">
  <div className="container">
            <h2 className="section-headline-centered">My Approach: Focused. Deliberate. Effective.</h2>
    <p className="section-subheadline" style={{ marginBottom: "1rem" }}>
      I work with businesses at the point where growth needs to be supported by intention, not improvisation. The goal isn’t to layer on process, it’s to make the existing operation clearer, steadier, and easier to manage day to day.
    </p>
    <p className="section-subheadline" style={{ marginBottom: "2rem" }}>
      I follow a simple progression, shaped to the realities of your team, your clients, and where the business is today:
    </p>
          <div className="why-choose-tile-list">
      {/* 1 */}
            <div className="why-choose-tile">
        <div className="why-choose-tile-number" aria-hidden="true">
          <p>1</p>
        </div>
        <div className="why-choose-tile-content">
          <h3 className="why-choose-tile-title">See how work actually flows</h3>
          <p className='why-choose-tile-subtitle'>Establish a shared view of how the business really operates.</p>
          <p className="why-choose-tile-text">
            Before changing anything, we examine how work enters the system now, how decisions get made, and where momentum slows or stalls.
          </p>
        </div>
      </div>
            {/* 2 */}
            <div className="why-choose-tile">
        <div className="why-choose-tile-number" aria-hidden="true">2</div>
        <div className="why-choose-tile-content">
          <h3 className="why-choose-tile-title">Address the biggest pressure points</h3>
          <p className='why-choose-tile-subtitle'>Focus effort where it makes the most difference.</p>
          <p className="why-choose-tile-text">
            Rather than tackling everything at once, we target the issues creating the most drag. Fixing unclear ownership, broken handoffs, or inconsistent priorities often unlocks disproportionate relief.
          </p>
        </div>
      </div>
            {/* 3 */}
            <div className="why-choose-tile">
        <div className="why-choose-tile-number" aria-hidden="true">3</div>
        <div className="why-choose-tile-content">
          <h3 className="why-choose-tile-title">Make the essentials repeatable</h3>
          <p className='why-choose-tile-subtitle'>Turn what works into something dependable.</p>
          <p className="why-choose-tile-text">
            As friction comes down, we codify the workflows and expectations the team relies on most. The goal is consistency without rigidity. We're striving for guidance people can use without slowing them down.
          </p>
        </div>
      </div>
            {/* 4 */}
            <div className="why-choose-tile">
        <div className="why-choose-tile-number" aria-hidden="true">4</div>
        <div className="why-choose-tile-content">
          <h3 className="why-choose-tile-title">Create room to grow</h3>
          <p className='why-choose-tile-subtitle'>Restore capacity so growth can be intentional.</p>
          <p className="why-choose-tile-text">
            With clearer flow and fewer bottlenecks, pressure comes down. The business gains breathing room, and growth becomes something you can steer instead of react to.
          </p>
        </div>
      </div>
          </div>
          <div className="why-choose-tile-footer">
            <h3 className="why-choose-tile-footer-text">
              Curious to see this in more detail?
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
              src={`${process.env.PUBLIC_URL || ''}/imgs/flexible-ways-to-engage.jpg`} 
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
