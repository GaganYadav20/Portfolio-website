import { useInView } from 'react-intersection-observer';
import resumePdf from '../assets/Gagan_Yadav_resume.pdf';
import './About.css';

const CODE_LINES = [
  'import tensorflow as tf',
  'import torch',
  'from sklearn import *',
  'model.fit(X, y)',
  'accuracy: 98.7%',
];

const DETAILS = [
  { icon: '🎓', label: 'DEGREE', value: 'B.Tech CSE (AI & ML)' },
  { icon: '📍', label: 'LOCATION', value: 'India' },
  { icon: '🔬', label: 'FOCUS', value: 'Deep Learning & NLP' },
  { icon: '💼', label: 'STATUS', value: 'Open to Opportunities' },
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="section section-alt" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">ABOUT</span>
          <h2 className="section-title">ABOUT ME</h2>
          <div className="section-line"></div>
        </div>

        <div className="about-grid">
          <div className={`about-image-wrapper ${inView ? 'revealed' : ''}`}>
            <div className="about-image-frame">
              <div className="frame-corner tl"></div>
              <div className="frame-corner tr"></div>
              <div className="frame-corner bl"></div>
              <div className="frame-corner br"></div>
              <div className="about-image-placeholder">
                <div className="avatar-icon">👨‍💻</div>
                <div className="code-lines">
                  {CODE_LINES.map((line, i) => (
                    <span key={i} style={{ '--i': i + 1, animationDelay: `${(i + 1) * 0.3}s` }}>
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={`about-content ${inView ? 'revealed' : ''}`}>
            <h3 className="about-subtitle">
              CSE STUDENT — <span className="about-highlight">AI & ML SPECIALIZATION</span>
            </h3>
            <p className="about-text">
              I'm a passionate Computer Science Engineering student with a deep focus on Artificial Intelligence
              and Machine Learning. My journey started with curiosity about how machines can learn and has evolved
              into a dedication to pushing the boundaries of intelligent systems.
            </p>
            <p className="about-text">
              From designing neural network architectures to deploying real-time ML pipelines, I blend theoretical
              understanding with practical implementation. I'm particularly interested in Computer Vision, Natural
              Language Processing, and Generative AI.
            </p>

            <div className="about-details">
              {DETAILS.map((d) => (
                <div className="detail-item" key={d.label}>
                  <span className="detail-icon">{d.icon}</span>
                  <div>
                    <span className="detail-label">{d.label}</span>
                    <span className="detail-value">{d.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-cta">
              <a href="#contact" className="btn-ghost" onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                <span>LET'S CONNECT</span>
                <span className="btn-arrow">→</span>
              </a>
              <a href={resumePdf} download="Gagan_Yadav_Resume.pdf" className="btn-ghost">
                <span>DOWNLOAD RESUME</span>
                <span className="btn-arrow">↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
