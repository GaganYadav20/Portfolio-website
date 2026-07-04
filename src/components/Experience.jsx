import { useInView } from 'react-intersection-observer';
import './Experience.css';

const EXPERIENCES = [
  {
    id: 'exp-aicte',
    date: 'SEPTEMBER 2025 — OCTOBER 2025',
    title: 'AICTE INTERNSHIP — CONVERSATIONAL DATA ANALYTICS WITH LLMS',
    org: 'Edunet Foundation (VOIS for Tech Program)',
    description: null,
    bullets: [
      'Participated in expert-led masterclasses and collaborative learning sessions.',
      'Successfully completed project work under mentorship and submitted final presentation.',
      'Earned certification from AICTE and Edunet Foundation.',
    ],
    tags: ['LLMs', 'Data Analytics', 'AICTE'],
  },
  {
    id: 'exp-2',
    date: '2023 — 2027',
    title: 'B.TECH CSE (AI & ML)',
    org: 'GHRCEM PUNE',
    description: 'Started specialization in Artificial Intelligence and Machine Learning. Built foundational projects in deep learning and data science.',
    bullets: null,
    tags: ['B.Tech', 'AI/ML', 'Foundation'],
  },
];

function TimelineItem({ exp, index }) {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`timeline-item ${inView ? 'revealed' : ''}`}
      style={{ '--delay': `${index * 0.15}s` }}
      id={exp.id}
    >
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <span className="timeline-date">{exp.date}</span>
        <h3>{exp.title}</h3>
        <h4>{exp.org}</h4>
        {exp.description && <p>{exp.description}</p>}
        {exp.bullets && (
          <ul>
            {exp.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
        <div className="timeline-tags">
          {exp.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">EXPERIENCE</span>
          <h2 className="section-title">MY JOURNEY</h2>
          <div className="section-line"></div>
        </div>

        <div className="timeline">
          {EXPERIENCES.map((exp, i) => (
            <TimelineItem key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
