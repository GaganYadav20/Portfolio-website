import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const SKILL_DATA = {
  ml: [
    { icon: '🔥', name: 'PyTorch', level: 90 },
    { icon: '🧮', name: 'TensorFlow', level: 88 },
    { icon: '📊', name: 'Scikit-Learn', level: 92 },
    { icon: '🤗', name: 'HuggingFace', level: 85 },
    { icon: '🖼️', name: 'OpenCV', level: 80 },
    { icon: '🧬', name: 'Keras', level: 87 },
    { icon: '📈', name: 'MLflow', level: 75 },
    { icon: '🗣️', name: 'LangChain', level: 78 },
  ],
  languages: [
    { icon: '🐍', name: 'Python', level: 95 },
    { icon: '☕', name: 'Java', level: 80 },
    { icon: '⚡', name: 'C++', level: 78 },
    { icon: '🗄️', name: 'SQL', level: 85 },
    { icon: '📜', name: 'JavaScript', level: 75 },
  ],
  tools: [
    { icon: '🐳', name: 'Docker', level: 80 },
    { icon: '☁️', name: 'AWS / GCP', level: 75 },
    { icon: '📓', name: 'Jupyter', level: 95 },
    { icon: '🔀', name: 'Git / GitHub', level: 90 },
    { icon: '🐧', name: 'Linux', level: 82 },
    { icon: '📦', name: 'Anaconda', level: 88 },
  ],
  web: [
    { icon: '⚛️', name: 'React', level: 72 },
    { icon: '🌐', name: 'HTML / CSS', level: 85 },
    { icon: '🚀', name: 'FastAPI', level: 82 },
    { icon: '🍃', name: 'Node.js', level: 78 },
    { icon: '📱', name: 'Streamlit', level: 88 },
  ],
};

const TABS = [
  { key: 'ml', label: 'AI / ML' },
  { key: 'languages', label: 'LANGUAGES' },
  { key: 'tools', label: 'TOOLS & PLATFORMS' },
  { key: 'web', label: 'WEB DEV' },
];

function SkillCard({ skill, index, visible }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div
      className={`skill-card ${visible ? 'skill-visible' : ''}`}
      style={{ '--delay': `${index * 0.05}s` }}
      ref={ref}
    >
      <div className="skill-icon-wrap">
        <span>{skill.icon}</span>
      </div>
      <h4>{skill.name}</h4>
      <div className="skill-bar">
        <div
          className="skill-fill"
          style={{
            width: inView && visible ? `${skill.level}%` : '0%',
          }}
        ></div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('ml');

  const handleTabClick = (key) => {
    setActiveTab(key);
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">SKILLS</span>
          <h2 className="section-title">TECH ARSENAL</h2>
          <div className="section-line"></div>
        </div>

        <div className="skills-tabs">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              className={`tab-btn ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => handleTabClick(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="skills-panels">
          {TABS.map((tab) => (
            <div
              key={tab.key}
              className={`skills-panel ${activeTab === tab.key ? 'active' : ''}`}
            >
              {SKILL_DATA[tab.key].map((skill, i) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={i}
                  visible={activeTab === tab.key}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
