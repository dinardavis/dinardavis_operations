import React from "react";
import { Link } from "react-router-dom";
import { getPublicUrl } from "../utils/publicUrl";

function HowIWork() {
  return (
    <div className="how-i-work">
      {/* Intro Section */}
      <section className="intro-section">
        <div className="how-i-work-content-container">
          <div className="intro-content-wrapper">
            <div className="intro-text">
              <h1 className="page-headline">How I Work<br></br><span>with Clients</span></h1>
              <div className="intro-content">
                <p>My work is structured, practical, and execution-focused.</p>
                <p>
                  I step in when a business has outgrown the way it currently runs; when decisions feel heavier, coordination takes longer than it should, and growth starts to introduce strain instead of momentum.
                </p>
                <p>
                  The goal is simple: bring clarity, consistency, and capacity back into the business so growth becomes easier to manage, not harder.
                </p>
              </div>
            </div>
            <div className="intro-image-wrapper">
              <img
                src={`${getPublicUrl()}/imgs/window-refleciton.jpg`}
                alt="Window reflection"
                className="intro-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What This Looks Like Section */}
      <section className="about-features-section">
        <div className="container">
          <h2 className="section-headline-centered">What This Looks Like in Practice</h2>
          <div className="intro-content-wrapper">
            <div className="intro-image-wrapper">
              <img
                src={`${getPublicUrl()}/imgs/laptop-desk.jpg`}
                alt="Business operations"
                className="intro-image"
              />
            </div>
            <div className="intro-text">
              <p className="intro-content">
                I don’t arrive with a pre-packaged system or a rigid framework. Every business already has a way of operating, even if it hasn’t been fully named or intentionally designed.
              </p>
              <p className="intro-content" style={{marginTop: '1.5rem', marginBottom: '1rem'}}>
                The work starts by understanding how things actually function today, then shaping that reality into something clearer and easier to run.
              </p>
              <h3 className="intro-content" style={{marginTop: '1.5rem', marginBottom: '1rem'}}>In practice, this means:</h3>
              <ul className="intro-content" style={{listStyle: 'disc', paddingLeft: '1.5rem', marginTop: '1rem'}}>
                <li style={{marginBottom: '0.75rem'}}>Work moves with fewer unnecessary handoffs</li>
                <li style={{marginBottom: '0.75rem'}}>Ownership becomes easier to see</li>
                <li style={{marginBottom: '0.75rem'}}>Internal structure matures to make scaling smoother</li>
              </ul>
              <p className="intro-content" style={{marginTop: '1.5rem'}}>
                The work is collaborative and hands-on, focused on changes that improve day-to-day execution, not abstract plans or documentation for its own sake.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-features-section">
        <h3 className="how-i-work-step-title  section-headline-centered">The Fundamental Progression</h3>
        <p className="how-i-work-subheadline section-subheadline">Every engagement follows a core progression, adapted to your team, your clients, and your stage of growth.</p>
      </section>

      {/* Process Steps - Single Column with Alternating Image Layout */}
      <section className="how-i-work-steps-section">
        <div className="container">
          <div className="how-i-work-steps-grid">
            {/* Step 1 - Content Left, Image Right */}
            <div className="how-i-work-step step-image-right">
              <div className="how-i-work-step-content frosted-glass">
                <h3 className="how-i-work-step-title">Map the Work Before You Change the Work</h3>
                <p className="how-i-work-step-text" style={{fontStyle: 'italic', marginBottom: '1.5rem', opacity: 0.9}}>
                  Clarity comes before correction.
                </p>
                <p className="how-i-work-step-text">
                  We begin by making the current operating reality visible, not how the business is supposed to run, but how it actually does today.
                </p>
                <p className="how-i-work-step-text" style={{marginTop: '1rem'}}>This includes:</p>
                <ul className="how-i-work-step-text" style={{listStyle: 'disc', paddingLeft: '1.5rem', marginTop: '0.5rem'}}>
                  <li style={{marginBottom: '0.5rem'}}>How new work enters the system</li>
                  <li style={{marginBottom: '0.5rem'}}>How priorities are set and revised</li>
                  <li style={{marginBottom: '0.5rem'}}>How decisions get made</li>
                  <li style={{marginBottom: '0.5rem'}}>How responsibilities move between people and teams</li>
                </ul>
                <p className="how-i-work-step-text" style={{marginTop: '1.5rem', fontWeight: '600'}}>
                  The goal is shared visibility. Not judgment. Not blame. Just a clear picture of what’s real.
                </p>
                <p className="how-i-work-step-text" style={{marginTop: '1rem'}}>
                  Most businesses have never paused long enough to see their full operating picture laid out end-to-end. This step alone often creates immediate alignment across leadership and teams.
                </p>
              </div>
              <div className="how-i-work-step-image-wrapper">
                <img 
                  src={`${getPublicUrl()}/imgs/howiwork_step1.png`} 
                  alt="Map the work before you change the work" 
                  className="how-i-work-step-image"
                />
                <div className="how-i-work-step-overlay"></div>
              </div>
            </div>

            {/* Step 2 - Image Left, Content Right */}
            <div className="how-i-work-step step-image-left">
              <div className="how-i-work-step-image-wrapper">
                <img 
                  src={`${getPublicUrl()}/imgs/howiwork_step2.png`} 
                  alt="Fix the few things causing the most drag" 
                  className="how-i-work-step-image"
                />
                <div className="how-i-work-step-overlay"></div>
              </div>
              <div className="how-i-work-step-content frosted-glass">
                <h3 className="how-i-work-step-title">Fix the Few Things Causing the Most Drag</h3>
                <p className="how-i-work-step-text" style={{fontStyle: 'italic', marginBottom: '1.5rem', opacity: 0.9}}>
                  Small changes, meaningful relief.
                </p>
                <p className="how-i-work-step-text">
                  Once the flow of work is visible, patterns emerge quickly.
                </p>
                <p className="how-i-work-step-text" style={{marginTop: '1rem'}}>
                  Rather than redesigning everything, we focus on the small number of issues that create a disproportionate amount of friction, such as:
                </p>
                <ul className="how-i-work-step-text" style={{listStyle: 'disc', paddingLeft: '1.5rem', marginTop: '0.5rem'}}>
                  <li style={{marginBottom: '0.5rem'}}>Unclear ownership</li>
                  <li style={{marginBottom: '0.5rem'}}>Broken handoffs between roles or teams</li>
                  <li style={{marginBottom: '0.5rem'}}>Inconsistent prioritization</li>
                  <li style={{marginBottom: '0.5rem'}}>Decisions that stall or bounce between people</li>
                </ul>
                <p className="how-i-work-step-text" style={{marginTop: '1.5rem'}}>
                  Rather than redesigning everything, we target the pressure points that slow the business down the most.
                </p>
                <p className="how-i-work-step-text" style={{marginTop: '1rem'}}>
                  Addressing these pressure points is typically where teams feel relief first, providing fewer interruptions, clearer direction, and smoother delivery.
                </p>
              </div>
            </div>

            {/* Step 3 - Content Left, Image Right */}
            <div className="how-i-work-step step-image-right">
              <div className="how-i-work-step-content frosted-glass">
                <h3 className="how-i-work-step-title">Turn Tribal Knowledge into a Usable Playbook</h3>
                <p className="how-i-work-step-text" style={{fontStyle: 'italic', marginBottom: '1.5rem', opacity: 0.9}}>
                  Make the business less dependent on memory.
                </p>
                <p className="how-i-work-step-text">
                  As things begin to run more smoothly, we focus on what needs to become repeatable.
                </p>
                <p className="how-i-work-step-text" style={{marginTop: '1rem'}}>This often includes:</p>
                <ul className="how-i-work-step-text" style={{listStyle: 'disc', paddingLeft: '1.5rem', marginTop: '0.5rem'}}>
                  <li style={{marginBottom: '0.5rem'}}>Core workflows</li>
                  <li style={{marginBottom: '0.5rem'}}>Role expectations</li>
                  <li style={{marginBottom: '0.5rem'}}>Onboarding for new team members</li>
                  <li style={{marginBottom: '0.5rem'}}>Standards for delivery and communication</li>
                </ul>
                <p className="how-i-work-step-text" style={{marginTop: '1.5rem', fontWeight: '600'}}>
                  The goal isn't documentation for its own sake. It's creating simple, usable reference points the team can rely on without needing constant clarification.
                </p>
                <p className="how-i-work-step-text" style={{marginTop: '1rem'}}>
                  The result is a business that holds its shape even as people change, clients shift, and demand grows.
                </p>
              </div>
              <div className="how-i-work-step-image-wrapper">
                <img 
                  src={`${getPublicUrl()}/imgs/howiwork_step3.png`} 
                  alt="Turn tribal knowledge into a usable playbook" 
                  className="how-i-work-step-image"
                />
                <div className="how-i-work-step-overlay"></div>
              </div>
            </div>

            {/* Step 4 - Image Left, Content Right */}
            <div className="how-i-work-step step-image-left">
              <div className="how-i-work-step-image-wrapper">
                <img 
                  src={`${getPublicUrl()}/imgs/howiwork_step4.png`} 
                  alt="Reduce overload and create capacity" 
                  className="how-i-work-step-image"
                />
                <div className="how-i-work-step-overlay"></div>
              </div>
              <div className="how-i-work-step-content frosted-glass">
                <h3 className="how-i-work-step-title">Reduce Overload and Create Capacity</h3>
                <p className="how-i-work-step-text" style={{fontStyle: 'italic', marginBottom: '1.5rem', opacity: 0.9}}>
                  Make growth sustainable.
                </p>
                <p className="how-i-work-step-text">
                  Finally, we step back and look at the overall load across the business.
                </p>
                <p className="how-i-work-step-text" style={{marginTop: '1rem'}}>This includes:</p>
                <ul className="how-i-work-step-text" style={{listStyle: 'disc', paddingLeft: '1.5rem', marginTop: '0.5rem'}}>
                  <li style={{marginBottom: '0.5rem'}}>Where people are consistently overextended</li>
                  <li style={{marginBottom: '0.5rem'}}>Where responsibilities are misaligned</li>
                  <li style={{marginBottom: '0.5rem'}}>Where the structure no longer matches the reality of the work</li>
                </ul>
                <p className="how-i-work-step-text" style={{marginTop: '1.5rem'}}>
                  From there, I make practical recommendations around:
                </p>
                <ul className="how-i-work-step-text" style={{listStyle: 'disc', paddingLeft: '1.5rem', marginTop: '0.5rem'}}>
                  <li style={{marginBottom: '0.5rem'}}>Role adjustments</li>
                  <li style={{marginBottom: '0.5rem'}}>Hiring priorities</li>
                  <li style={{marginBottom: '0.5rem'}}>Tools and systems that genuinely reduce effort instead of adding complexity</li>
                </ul>
                <p className="how-i-work-step-text" style={{marginTop: '1.5rem', fontWeight: '600'}}>
                  The goal is to create space for better decisions, stronger execution, and more intentional growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combined Clients Notice and CTA Section */}
      <section className="how-i-work-cta-section">
        {/* What Clients Notice - Left Side */}
        <div className="clients-notice-half">
          <div className="clients-notice-background">
            <img 
              src={`${getPublicUrl()}/imgs/growing-entrepreneur.jpg`} 
              alt="Client results" 
              className="clients-notice-bg-image"
            />
            <div className="how-i-work-cta-overlay">
              <div className="how-i-work-content-container">
                <h2 className="how-i-work-cta-headline">
                 What Clients Usually Notice First
                </h2>
                <ul className="clients-notice-list">
                  <li>Work feels steadier</li>
                  <li>Ownership is clearer</li>
                  <li>Fewer things fall through the cracks</li>
                </ul>
                <p className="how-i-work-cta-text">
                  We’ll look at what’s working, what feels fragile, and whether it makes sense to work together.
                </p>
                <div className="how-i-work-cta-form" style={{justifyContent: 'center', marginTop: '2rem'}}>
                  <Link to="/services" className="btn clients-notice-btn">
                    View Services & Pricing
                  </Link>
                </div>               
              </div>
            </div>
          </div>
        </div>

        {/* CTA - Right Side */}
        <div className="how-i-work-cta-half">
          <div className="how-i-work-cta-background">
            <img 
              src={`${getPublicUrl()}/imgs/business-consultation.jpg`}
              alt="Business consultation" 
              className="how-i-work-cta-bg-image"
            />
            <div className="how-i-work-cta-overlay">
              <div className="how-i-work-content-container">
                <h2 className="how-i-work-cta-headline">
                 If you’d like to see whether we're a fit, let's have a chat.
                </h2>
                <p className="how-i-work-cta-text">
                  We’ll look at what’s working, what feels fragile, and whether it makes sense to work together.
                </p>
                <div className="how-i-work-cta-form" style={{justifyContent: 'center', marginTop: '2rem'}}>
                  <Link to="/contact" className="btn btn-primary">
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

export default HowIWork;
