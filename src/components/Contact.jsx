import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

const CONTACT_METHODS = [
  {
    id: 'contact-email',
    icon: '📧',
    label: 'EMAIL',
    value: 'gaganyadav2094@gmail.com',
    href: 'mailto:gaganyadav2094@gmail.com',
  },
  {
    id: 'contact-linkedin',
    icon: '💼',
    label: 'LINKEDIN',
    value: 'linkedin.com/in/gagan',
    href: 'https://linkedin.com',
    external: true,
  },
  {
    id: 'contact-github',
    icon: '🐙',
    label: 'GITHUB',
    value: 'github.com/GaganYadav20',
    href: 'https://github.com/GaganYadav20',
    external: true,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { ref: leftRef, inView: leftInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: rightRef, inView: rightInView } = useInView({ threshold: 0.1, triggerOnce: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      e.target.reset();
    }, 3000);
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">CONTACT</span>
          <h2 className="section-title">GET IN TOUCH</h2>
          <div className="section-line"></div>
        </div>

        <div className="contact-grid">
          <div
            ref={leftRef}
            className={`contact-info ${leftInView ? 'revealed' : ''}`}
          >
            <h3>LET'S BUILD SOMETHING <span className="contact-highlight">INTELLIGENT</span> TOGETHER.</h3>
            <p>
              I'm always open to discussing AI/ML projects, research collaborations,
              or exciting opportunities. Drop me a message!
            </p>

            <div className="contact-methods">
              {CONTACT_METHODS.map((m) => (
                <a
                  key={m.id}
                  href={m.href}
                  className="contact-method"
                  id={m.id}
                  {...(m.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <div className="contact-method-icon">{m.icon}</div>
                  <div>
                    <span className="contact-method-label">{m.label}</span>
                    <span className="contact-method-value">{m.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form
            ref={rightRef}
            className={`contact-form ${rightInView ? 'revealed' : ''}`}
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input type="text" id="form-name" placeholder=" " required />
              <label htmlFor="form-name">YOUR NAME</label>
            </div>
            <div className="form-group">
              <input type="email" id="form-email" placeholder=" " required />
              <label htmlFor="form-email">EMAIL ADDRESS</label>
            </div>
            <div className="form-group">
              <input type="text" id="form-subject" placeholder=" " required />
              <label htmlFor="form-subject">SUBJECT</label>
            </div>
            <div className="form-group">
              <textarea id="form-message" rows="5" placeholder=" " required></textarea>
              <label htmlFor="form-message">MESSAGE</label>
            </div>
            <button
              type="submit"
              className={`btn-ghost btn-full ${submitted ? 'sent' : ''}`}
              id="form-submit"
            >
              <span>{submitted ? '✓ MESSAGE SENT' : 'SEND MESSAGE'}</span>
              {!submitted && <span className="btn-arrow">→</span>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
