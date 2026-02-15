/**
 * EmailJS template variables (form field names sent to your template):
 * firstName, lastName, company, email, message, teamSize, lookingFor
 */
import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { IoCheckmarkCircleSharp, IoCloseCircleSharp } from 'react-icons/io5';

const MESSAGE_MAX_LENGTH = 500;

const TEAM_SIZE_OPTIONS = [
  { value: '', label: 'Team size / stage' },
  { value: 'Solo / Founder-only', label: 'Solo / Founder-only' },
  { value: '2–10 people', label: '2–10 people' },
  { value: '11–25 people', label: '11–25 people' },
  { value: '26–50 people', label: '26–50 people' },
  { value: '51+ people', label: '51+ people' },
];

const LOOKING_FOR_OPTIONS = [
  { value: '', label: "Whether they're looking for:" },
  { value: 'Project-based ops work', label: 'Project-based ops work' },
  { value: 'Fractional support', label: 'Fractional support' },
  { value: 'Advisory / planning help', label: 'Advisory / planning help' },
];

function Contact() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    message: '',
    teamSize: '',
    lookingFor: '',
  });
  const [formInputsValid, setFormInputsValid] = useState({
    firstName: false,
    lastName: false,
    email: false,
    message: false,
  });
  const [firstNameField, setFirstNameField] = useState(null);
  const [lastNameField, setLastNameField] = useState(null);
  const [emailField, setEmailField] = useState(null);
  const [messageField, setMessageField] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    setFirstNameField(document.querySelector('.firstNameField'));
    setLastNameField(document.querySelector('.lastNameField'));
    setEmailField(document.querySelector('.emailField'));
    setMessageField(document.querySelector('.messageField'));
  }, []);

  function clearInputs() {
    setFormData({
      firstName: '',
      lastName: '',
      company: '',
      email: '',
      message: '',
      teamSize: '',
      lookingFor: '',
    });
  }

  function resetFormInputs() {
    setFormInputsValid({
      firstName: false,
      lastName: false,
      email: false,
      message: false,
    });
  }

  function validateFormInputs() {
    const emailFormat = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const nameFormat = /^[A-Za-z]+$/;

    if (firstNameField) {
      if (!firstNameField.value.match(nameFormat) && document.activeElement === firstNameField) {
        firstNameField.classList.add('input-error');
        setFormInputsValid((prev) => ({ ...prev, firstName: false }));
      } else if (firstNameField.value.match(nameFormat)) {
        firstNameField.classList.remove('input-error');
        setFormInputsValid((prev) => ({ ...prev, firstName: true }));
      }
    }
    if (lastNameField) {
      if (!lastNameField.value.match(nameFormat) && document.activeElement === lastNameField) {
        lastNameField.classList.add('input-error');
        setFormInputsValid((prev) => ({ ...prev, lastName: false }));
      } else if (lastNameField.value.match(nameFormat)) {
        lastNameField.classList.remove('input-error');
        setFormInputsValid((prev) => ({ ...prev, lastName: true }));
      }
    }
    if (emailField) {
      if (!emailField.value.match(emailFormat) && document.activeElement === emailField) {
        emailField.classList.add('input-error');
        setFormInputsValid((prev) => ({ ...prev, email: false }));
      } else if (emailField.value.match(emailFormat)) {
        emailField.classList.remove('input-error');
        setFormInputsValid((prev) => ({ ...prev, email: true }));
      }
    }
    if (messageField) {
      if (messageField.value.length === 0 && document.activeElement === messageField) {
        messageField.classList.add('input-error');
        setFormInputsValid((prev) => ({ ...prev, message: false }));
      } else if (messageField.value.length > 0) {
        messageField.classList.remove('input-error');
        setFormInputsValid((prev) => ({ ...prev, message: true }));
      }
    }
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    validateFormInputs();
  }

  function sendEmail(e) {
    e.preventDefault();
    if (
      formInputsValid.firstName &&
      formInputsValid.lastName &&
      formInputsValid.email &&
      formInputsValid.message
    ) {
      const serviceId = process.env.REACT_APP_SERVICE_ID;
      const templateId = process.env.REACT_APP_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.error('EmailJS env missing. Add to .env: REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY');
        setEmailSuccess(false);
        setPopupVisible(true);
        return;
      }

      emailjs
        .sendForm(serviceId, templateId, e.target, publicKey)
        .then(() => {
          setEmailSuccess(true);
          clearInputs();
          resetFormInputs();
          setPopupVisible(true);
        })
        .catch((err) => {
          console.error('EmailJS error:', err);
          setEmailSuccess(false);
          setPopupVisible(true);
        });
    } else {
      if (firstNameField && firstNameField.value.length === 0) firstNameField.classList.add('input-error');
      if (lastNameField && lastNameField.value.length === 0) lastNameField.classList.add('input-error');
      if (emailField && emailField.value.length === 0) emailField.classList.add('input-error');
      if (messageField && messageField.value.length === 0) messageField.classList.add('input-error');
    }
  }

  function closeModal() {
    setPopupVisible(false);
  }

  function handleOverlayClick(e) {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  }

  return (
    <div className="contact">
      {/* Success/Error modal - centered, close on X or click outside */}
      {popupVisible && (
        <div
          className="contact-modal-overlay"
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          <div className="contact-modal" ref={modalRef}>
            <button
              type="button"
              className="contact-modal-close"
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>
            {emailSuccess ? (
              <>
                <div className="contact-modal-icon-wrap">
                  <IoCheckmarkCircleSharp className="contact-modal-icon contact-modal-icon--success" />
                </div>
                <h2 id="contact-modal-title" className="contact-modal-title">Thanks — I've received your info, and will review it personally.</h2>
                <p className="contact-modal-text">
                  If you'd like to skip the scheduling back-and-forth, you can grab a time below. Otherwise, I'll follow up shortly.
                </p>
                <a
                  href="https://calendly.com/dinardavis/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary contact-modal-btn"
                >
                  Schedule an Ops Fit Call
                </a>
                <p className="contact-modal-sub">Initial Ops Fit Call (30 min)</p>
              </>
            ) : (
              <>
                <div className="contact-modal-icon-wrap">
                  <IoCloseCircleSharp className="contact-modal-icon contact-modal-icon--error" />
                </div>
                <h2 id="contact-modal-title" className="contact-modal-title">Something went wrong</h2>
                <p className="contact-modal-text">
                  Please double-check your info and try again.
                </p>
              </>
            )}
          </div>
        </div>
      )}

      <section className="contact-hero-section">
        <div className="container">
          <div className="contact-hero-grid">
            <div className="contact-hero-left">
              <h1 className="page-headline">Request a<br></br> <span>Consultation</span></h1>
              <div className="contact-hero-copy">
                <p>
                  If you'd like to explore whether working together makes sense, we should talk.
                </p>
                <p>
                  The first conversation is simple. You can share what's working with your business, where things feel uncertain, and what direction you're hoping to go. I listen, and let you know if/where I can help.
                </p>
                <p className="contact-hero-note">
                  I work with a limited number of clients at a time so I can stay focused and involved. If it feels like a fit, I'll follow up personally.
                </p>
              </div>
              <div className="contact-hero-left-image-wrap">
                <img src={`${process.env.PUBLIC_URL || ''}/imgs/contact-page.png`} alt="" className="contact-hero-left-image" />
                <div className="contact-hero-left-image-overlay" aria-hidden="true" />
              </div>
            </div>

            <div className="contact-hero-right">
              <div className="contact-form-card frosted-glass">
                <form className="contact-form" onSubmit={sendEmail}>
                  <div className="contact-form-grid">
                    <div className="form-group">
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="firstNameField"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="lastNameField"
                        required
                      />
                    </div>
                    <div className="form-group contact-form-span-2">
                      <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Company website or relevant link"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group contact-form-span-2">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="emailField"
                        required
                      />
                    </div>
                    <div className="form-group contact-form-span-2">
                      <select
                        id="teamSize"
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleChange}
                        className={`contact-form-select${!formData.teamSize ? ' contact-form-select--placeholder' : ''}`}
                        aria-label="Team size / stage"
                      >
                        {TEAM_SIZE_OPTIONS.map((opt) => (
                          <option key={opt.value || 'team-empty'} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group contact-form-span-2">
                      <select
                        id="lookingFor"
                        name="lookingFor"
                        value={formData.lookingFor}
                        onChange={handleChange}
                        className={`contact-form-select${!formData.lookingFor ? ' contact-form-select--placeholder' : ''}`}
                        aria-label="Whether they're looking for"
                      >
                        {LOOKING_FOR_OPTIONS.map((opt) => (
                          <option key={opt.value || 'looking-empty'} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group contact-form-span-2 contact-form-textarea-wrap">
                      <textarea
                        id="message"
                        name="message"
                        placeholder="What's broken or slowing the business down?"
                        value={formData.message}
                        onChange={handleChange}
                        className="messageField"
                        maxLength={MESSAGE_MAX_LENGTH}
                        required
                      />
                      <p className="contact-form-char-note">Character limit 500</p>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary contact-submit-btn">
                    Send Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
