import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPublicUrl } from '../utils/publicUrl';

function About() {
  useEffect(() => {
    // Set the About CTA background image as a CSS variable
    document.documentElement.style.setProperty(
      '--about-cta-bg-image',
      `url('${getPublicUrl()}/imgs/about-cta.jpg')`
    );
  }, []);

  return (
    <div className="about">
      {/* Intro Section */}
      <section className="intro-section">
        <div className="container">
          <h1 className="page-headline">About</h1>
          <div className="about-intro-wrapper">
            <div className="about-intro-text">
              <h2 className="page-headline"><span style={{marginLeft: 0}}>Hi, I'm Dinar.</span></h2>
              <div className="intro-content">
                <p>
                  Since I don't have any hair to let down, I wear hats. Lots of hats. Which also makes me uniquely qualified for this work. (I kid! I kid!)</p>
                  
                <p>But really, I wanted to give you a chance to get to know me a little better. Not just what I do, but why I've ended up doing this work in the first place.
                </p>
                <p>
                  I've always had a natural pull toward order. Not the rigid, color-coded-for-everything kind, but the logical flow of things that makes you feel lighter when they're working the way they should. Over time, that instinct kept putting me in environments where complexity was the norm and clarity was the difference between progress and chaos.
                </p>
              </div>
            </div>
            <div className="about-intro-image-wrapper">
              <img 
                src={`${getPublicUrl()}/imgs/about_dinar.jpg`} 
                alt="Dinar Davis" 
                className="about-intro-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Where I've Spent My Time Section */}
      <section className="about-content-section">
        <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
          <h2 className="section-headline">Where I've Spent My Time</h2>
          <div className="section-content">
            <p>
              Over the last 15+ years, I've worked with organizations where people, systems, and decisions had to hold up under real pressure.
            </p>
            <p>That's taken me through:</p>
            <ul className="about-list">
              <li>Television production finance at 20th Century Studios, supporting large-scale scripted productions like <span>The Simpsons</span>, <span>Modern Family</span>, <span>Family Guy</span>, and <span>American Dad!</span>, where timelines, budgets, and coordination had to stay aligned across hundreds of moving parts</li>
              <li>Operations leadership in nonprofit organizations, overseeing budgets, payroll, facilities, and multi-site teams in environments where resources were limited and impact mattered</li>
              <li>Hospitality operations at Wynn & Encore Resorts, Four Seasons, and Ritz-Carlton, managing high-volume teams and service workflows where consistency and execution made or broke the experience</li>
              <li>Copywriting and campaign work for brands like Disney, GM, P&G, Pfizer, and AT&T, helping shape messaging that had to move through complex approval paths and real-world delivery systems</li>
            </ul>
            <p>
              Across very different industries, the pattern was the same: when the internal structure made sense, everything else got easier. When it didn't, even good people and good ideas struggled to move forward.
            </p>
          </div>
        </div>
      </section>

      {/* How That Shapes My Work Today Section */}
      <section className="about-content-section">
        <div className="container">
          <div className="about-content-wrapper about-content-image-left">
            <div className="about-content-image-wrapper">
              <img
                src={`${getPublicUrl()}/imgs/how-that-shapes.png`}
                alt="How that shapes my work today"
                className="about-content-image"
              />
              <div className="about-content-image-overlay"></div>
            </div>
            <div className="about-content-text frosted-glass">
              <h2 className="section-headline">How That Shapes My Work Today</h2>
              <div className="section-content">
                <p>
                  I work with growing businesses that have reached the point where the way they operate hasn't quite caught up to the size or business volume they've built.
                </p>
                <p>
                  My role isn't to impose a framework or sell a methodology.<br />
                  It's to step into the reality of how your business actually runs, and help shape it into something clearer, steadier, and easier to manage.
                </p>
                <p>
                  The work is practical, hands-on, and grounded in day-to-day execution. Less theory. More doing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Clients Usually Come to Me For Section */}
      <section className="about-content-section">
        <div className="container">
          <div className="about-content-wrapper about-content-image-right">
            <div className="about-content-text frosted-glass">
              <h2 className="section-headline" style={{maxWidth: '500px'}}>What Clients Usually Come to Me For</h2>
              <div className="section-content">
                <p>
                  Most of the time, it's some version of this:
                </p>
                <p style={{fontWeight: '600', fontStyle: 'italic', marginTop: '1rem'}}>
                  Things are working... but they feel more cumbersome than they should.
                </p>
                <p style={{marginTop: '1rem'}}>
                  That's usually where I'm most useful. Helping teams reduce unnecessary friction, clarify ownership and flow, and build internal structure that can support the next stage of growth without constant strain.
                </p>
              </div>
            </div>
            <div className="about-content-image-wrapper">
              <img
                src={`${getPublicUrl()}/imgs/what-clients-come-to.png`}
                alt="What clients usually come to me for"
                className="about-content-image"
              />
              <div className="about-content-image-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - matches Home "View Services & Pricing" styling */}
      <section className="cta-section about-cta-section">
        <div className="container">
          <h2 className="cta-headline about-cta-headline">If your business is growing but starting to feel harder to run, I'd be glad to talk.</h2>
          <Link to="/contact" className="btn btn-secondary services-home-btn">
            Request a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;

