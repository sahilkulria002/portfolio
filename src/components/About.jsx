import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="about-intro">
              I work on robotic systems where software meets physical machines — from simulation and control logic to industrial communication and deployment.
            </p>

            <div className="about-bio">
              {profile.bio}
            </div>

            <div className="about-philosophy">
              <h3>Engineering Philosophy</h3>
              <ul>
                <li>Design systems with both simulation and real-world constraints in mind</li>
                <li>Focus on reliability and integration, not isolated components</li>
                <li>Validate thoroughly before hardware deployment</li>
                <li>Build systems that scale from prototypes to production</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="about-exploring"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Currently Exploring</h3>
            <ul className="exploring-list">
              {profile.currentlyExploring.map((item, index) => (
                <li key={index}>
                  <span className="bullet">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
