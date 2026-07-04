import { useInView } from 'react-intersection-observer';
import './Projects.css';

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const PROJECTS = [
  {
    id: 'project-1',
    icon: '🤖',
    title: 'AI CHATBOT WITH RAG',
    desc: 'Retrieval-Augmented Generation chatbot using LangChain and GPT-4, capable of querying custom knowledge bases with semantic search.',
    tags: ['LangChain', 'GPT-4', 'FAISS', 'Python'],
  },
  {
    id: 'project-2',
    icon: '👁️',
    title: 'REAL-TIME OBJECT DETECTION',
    desc: 'YOLOv8-based real-time object detection system achieving 94% mAP on custom dataset with edge deployment on Jetson Nano.',
    tags: ['YOLOv8', 'OpenCV', 'ONNX', 'Jetson'],
  },
  {
    id: 'project-3',
    icon: '🧬',
    title: 'MEDICAL IMAGE SEGMENTATION',
    desc: 'U-Net based segmentation model for tumor detection in MRI scans, achieving 96% Dice coefficient on the BraTS dataset.',
    tags: ['U-Net', 'PyTorch', 'Medical AI', 'Segmentation'],
  },
  {
    id: 'project-4',
    icon: '📝',
    title: 'SENTIMENT ANALYSIS ENGINE',
    desc: 'Fine-tuned BERT model for multi-class sentiment analysis on product reviews with a FastAPI backend and React dashboard.',
    tags: ['BERT', 'HuggingFace', 'FastAPI', 'React'],
  },
  {
    id: 'project-5',
    icon: '🎨',
    title: 'AI ART GENERATOR',
    desc: 'Stable Diffusion fine-tuned on custom art styles with a Streamlit interface for style transfer and prompt-guided generation.',
    tags: ['Stable Diffusion', 'GANs', 'Streamlit', 'ComfyUI'],
  },
  {
    id: 'project-6',
    icon: '📊',
    title: 'STOCK PRICE PREDICTOR',
    desc: 'LSTM + Transformer ensemble model for stock price prediction with feature engineering pipeline and real-time dashboard.',
    tags: ['LSTM', 'Transformers', 'Pandas', 'Plotly'],
  },
];

function ProjectCard({ project, index }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <article
      ref={ref}
      className={`project-card ${inView ? 'revealed' : ''}`}
      style={{ '--delay': `${index * 0.08}s` }}
      id={project.id}
    >
      <div className="project-header">
        <div className="project-icon">{project.icon}</div>
        <div className="project-links">
          <a href="#" className="project-link" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href="#" className="project-link" aria-label="Live demo">
            <ExternalIcon />
          </a>
        </div>
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.desc}</p>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">PROJECTS</span>
          <h2 className="section-title">FEATURED PROJECTS</h2>
          <div className="section-line"></div>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
