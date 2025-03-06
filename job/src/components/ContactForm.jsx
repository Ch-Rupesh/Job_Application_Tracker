import React, { useEffect } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="contact-form-container">
      <div className="visme_d" 
           data-title="Newsletter Contact Form" 
           data-url="76jzk9en-newsletter-contact-form?fullPage=true" 
           data-domain="forms" 
           data-full-page="true" 
           data-min-height="100vh" 
           data-form-id="116550">
      </div>
    </div>
  );
}

export default ContactForm;
