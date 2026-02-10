import React, { useState } from 'react';
import './Contact.css';

const ContacrMeComponent = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMsg('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSuccessMsg(''), 3000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>
      <span className="contact-underline"></span>

      <div className="contact-wrapper">
        <div className="contact-info">
          <p className="contact-text">
            Let's collaborate! I am always open to discussing exciting projects and new opportunities.
          </p>
          <div className="info-item">📧 rajeshk55182@gmail.com</div>
          <div className="info-item">📞 +91 9791659379</div>
          <div className="info-item">📍 Manapparai, TN</div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <small className="error">{errors.name}</small>

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <small className="error">{errors.email}</small>

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <small className="error">{errors.message}</small>

          <button type="submit" className="send-btn">SEND MESSAGE</button>
          <p className="success-msg">{successMsg}</p>
        </form>
      </div>
    </section>
  );
};

export default ContacrMeComponent;
