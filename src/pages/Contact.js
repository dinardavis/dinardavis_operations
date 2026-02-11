import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { IoCheckmarkCircleSharp, IoCloseCircleSharp } from 'react-icons/io5';

function Contact() {
  const [popupDisplay, setPopupDisplay] = useState({ display: 'none' });
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    message: ''
  });
  const [formInputsValid, setFormInputsValid] = useState({
    firstName: false,
    lastName: false,
    email: false,
    message: false
  });
  const [firstNameField, setFirstNameField] = useState(null);
  const [lastNameField, setLastNameField] = useState(null);
  const [emailField, setEmailField] = useState(null);
  const [messageField, setMessageField] = useState(null);

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
      message: ''
    });
  }

  function resetFormInputs() {
    setFormInputsValid({
      firstName: false,
      lastName: false,
      email: false,
      message: false
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
      [name]: type === 'checkbox' ? checked : value
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
        animatePopup();
        return;
      }

      emailjs
        .sendForm(serviceId, templateId, e.target, publicKey)
        .then(() => {
          setEmailSuccess(true);
          clearInputs();
          resetFormInputs();
          animatePopup();
        })
        .catch((err) => {
          console.error('EmailJS error:', err);
          setEmailSuccess(false);
          animatePopup();
        });
    } else {
      if (firstNameField && firstNameField.value.length === 0) firstNameField.classList.add('input-error');
      if (lastNameField && lastNameField.value.length === 0) lastNameField.classList.add('input-error');
      if (emailField && emailField.value.length === 0) emailField.classList.add('input-error');
      if (messageField && messageField.value.length === 0) messageField.classList.add('input-error');
    }
  }

  function animatePopup() {
    setPopupDisplay({ display: 'flex', className: 'fadein' });
    setTimeout(() => {
      setPopupDisplay({ display: 'none', className: '' });
    }, 4500);
  }

  return (
    <div className="contact">
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
                  <div className="thank-you-popup" style={popupDisplay}>
                    <p className="thank-you-copy success">{emailSuccess ? 'Success!' : 'Error!'}</p>
                    <div className="checkmark-container">
                      {emailSuccess ? (
                        <IoCheckmarkCircleSharp className="thank-you-pop-checkmark" />
                      ) : (
                        <IoCloseCircleSharp className="thank-you-pop-error" />
                      )}
                    </div>
                    {emailSuccess ? (
                      <>
                        <p className="thank-you-copy">Thanks for reaching out!</p>
                        <p className="thank-you-copy">I'll be in touch soon.</p>
                      </>
                    ) : (
                      <p className="thank-you-copy">
                        Looks like something went wrong. Double check your info, and try again.
                      </p>
                    )}
                  </div>

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
                      />
                    </div>
                    <div className="form-group contact-form-span-2">
                      <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Company"
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
                      />
                    </div>
                    <div className="form-group contact-form-span-2">
                      <textarea
                        id="message"
                        name="message"
                        placeholder="What's prompting you to reach out?"
                        value={formData.message}
                        onChange={handleChange}
                        className="messageField"
                      />
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
