import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { useCountUp } from '../hooks/useCountUp';
import profilePic from '../assets/profile1.png';
import resumePdf from '../assets/Gagan_Yadav_resume.pdf';
import './Hero.css';

const GREETINGS = [
  'Hello, World!',
  'Namaste 🙏',
  'Welcome to my portfolio',
  'print("Hi there!")',
  'model.predict(you)',
];

const STATS = [
  { target: 5, label: 'PROJECTS' },
  { target: 0, label: 'RESEARCH PAPERS' },
  { target: 8, label: 'CERTIFICATIONS' },
];

function StatItem({ target, label }) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  const { count, start } = useCountUp(target, 2000, true);

  useEffect(() => {
    if (inView) start();
  }, [inView, start]);

  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-number">{count}</span>
      <span className="stat-plus">+</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

const FLOATING_TAGS = ['PyTorch', 'TensorFlow', 'NLP', 'CNN', 'GANs', 'LLMs'];

export default function Hero() {
  const typedText = useTypingEffect(GREETINGS);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-greeting">
            <span className="typing-prefix">&gt;&nbsp;</span>
            <span className="typed-text">{typedText}</span>
            <span className="cursor-blink">|</span>
          </p>

          <h1 className="hero-name display-xxl">
            I'M <span className="hero-name-white">GAGAN</span>
          </h1>

          <h2 className="hero-title">
            AI &amp; MACHINE LEARNING ENGINEER
          </h2>

          <p className="hero-description">
            Computer Science Engineering student passionate about building intelligent systems,
            deep learning architectures, and transforming data into actionable insights.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn-ghost" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <span>VIEW PROJECTS</span>
              <span className="btn-arrow">→</span>
            </a>
            <a href={resumePdf} download="Gagan_Yadav_Resume.pdf" className="btn-ghost">
              <span>RESUME</span>
              <span className="btn-arrow">↓</span>
            </a>
          </div>

          <div className="hero-stats">
            {STATS.map((stat) => (
              <StatItem key={stat.label} target={stat.target} label={stat.label} />
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="orbit-system">
            <div className="orbit-core">
              <img src={profilePic} alt="Gagan Yadav" className="profile-pic" />
            </div>
            {FLOATING_TAGS.map((tag, i) => (
              <div
                key={tag}
                className={`floating-tag tag-${i + 1}`}
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
