import { motion } from 'framer-motion';
import HeroVisualization from './HeroVisualization';
import { profile } from '../data/profile';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <h1 className="hero-heading">{profile.heroHeading}</h1>
          
          <p className="hero-subtext">{profile.heroSubtext}</p>

          <div className="hero-info">
            <div className="info-item">
              <span className="info-label">ENGINEER</span>
              <span className="info-value">{profile.name}</span>
            </div>
            <div className="info-item">
              <span className="info-label">LOCATION</span>
              <span className="info-value">{profile.location}</span>
            </div>
            <div className="info-item">
              <span className="info-label">STATUS</span>
              <span className="info-value">{profile.status}</span>
            </div>
          </div>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in Touch
            </a>
          </div>

          <div className="hero-links">
            {profile.socialLinks.github !== "[ADD GITHUB URL]" && (
              <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
            {profile.socialLinks.linkedin !== "[ADD LINKEDIN URL]" && (
              <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            )}
            {profile.resumeUrl !== "[ADD RESUME URL]" && (
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            )}
          </div>
        </motion.div>

        <div className="hero-visual">
          <HeroVisualization />
        </div>
      </div>
    </section>
  );
}
