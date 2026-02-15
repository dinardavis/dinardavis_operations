import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPublicUrl } from '../utils/publicUrl';

function Services() {
  useEffect(() => {
    // Set the services background image as a CSS variable
    document.documentElement.style.setProperty(
      '--services-bg-image',
      `url('${getPublicUrl()}/imgs/services-background.png')`
    );
  }, []);

  return (
    <div className="services">
      {/* Intro Section */}
      <section className="intro-section">
        <div className="container">
          <div className="intro-content-wrapper">
            <div className="intro-text">
              <h1 className="page-headline">Ways we can<br></br><span>work together</span></h1>
              <div className="intro-content">
                <p>
                  Engagements are designed to meet businesses where they are today, from short, focused stabilization work, to ongoing support and embedded leadership.
                </p>
              </div>
            </div>
            <div className="intro-image-wrapper">
              <img
                src={`${getPublicUrl()}/imgs/work-together-hero.png`}
                alt="Ways we can work together"
                className="services-intro-image"
              />
              <div className="intro-image-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards - Using Feature Card Grid Pattern */}
      <section className="services-section">
        <div className="container">
          <div className="feature-cards-grid services-grid">
            <div className="service-card">
              <h2 className="feature-card-title">30-Day Operational Stabilization</h2>
              <p className="feature-card-price">$3,500<span> one-time</span></p>
              <p className="feature-card-text">
                A focused engagement to assess, stabilize, and structure your internal operations so growth doesn't create unnecessary friction.
              </p>
              <p className="feature-card-text">
                Designed for businesses experiencing bottlenecks, overload, or growing pains.
              </p>
              <Link to="/contact" className="btn btn-secondary" style={{marginTop: '2rem', alignSelf: 'flex-start'}}>
                Request a Consultation
              </Link>
            </div>

            {/* Service 2 */}
            <div className="service-card">
              <h2 className="feature-card-title">Ongoing Operational Support</h2>
              <p className="feature-card-price">$2,000<span>/month</span></p>
              <p className="feature-card-text">
                Continued support to optimize workflows, document processes, and reduce operational friction as the business evolves.
              </p>
              <p className="feature-card-text">
                Ideal for teams that want steady improvement without adding internal headcount.
              </p>
              <Link to="/contact" className="btn btn-secondary" style={{marginTop: '2rem', alignSelf: 'flex-start'}}>
                Request a Consultation
              </Link>
            </div>

            {/* Service 3 */}
            <div className="service-card">
              <h2 className="feature-card-title">Light Operational Support</h2>
              <p className="feature-card-price">$1,000<span>/month</span></p>
              <p className="feature-card-text">
                A lighter-touch option for smaller teams or businesses with limited but recurring operational needs.
              </p>
              <p className="feature-card-text">
                Focused on targeted improvements, process cleanup, and selective load reduction.
              </p>
              <Link to="/contact" className="btn btn-secondary" style={{marginTop: '2rem', alignSelf: 'flex-start'}}>
                Request a Consultation
              </Link>
            </div>

            {/* Service 4 - Fractional COO (Featured) */}
            <div className="service-card-featured">
              <div className="service-badge" style={{marginBottom: '1rem', display: 'inline-block'}}>Limited Availability</div>
              <h2 className="feature-card-title">Fractional COO</h2>
              <p className="feature-card-price" style={{fontWeight: '600', marginBottom: '1rem'}}>$9,000<span>/month</span></p>
              <p className="feature-card-text">
                For growing businesses that need senior operational leadership but aren't ready for a full-time executive.
              </p>
              <p className="feature-card-text">
                I step in as an acting COO to stabilize operations, structure teams, and build the internal infrastructure required to support the next stage of growth.
              </p>
              <p className="feature-card-text">
                This is an embedded, hands-on leadership role focused on execution, stability, and load reduction.
              </p>
              <Link to="/contact" className="btn btn-secondary" style={{marginTop: '2rem', alignSelf: 'flex-start'}}>
                Request Availability
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;

