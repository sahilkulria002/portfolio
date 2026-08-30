import { motion } from 'framer-motion';
import { experiences } from '../data/experience';
import './Experience.css';

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Industrial Experience
        </motion.h2>

        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="experience-card"
              variants={itemVariants}
            >
              <div className="exp-header">
                <div className="exp-info">
                  <h3 className="exp-company">{exp.company}</h3>
                  <p className="exp-role">{exp.role}</p>
                  <p className="exp-location">{exp.location}</p>
                </div>
                <div className="exp-dates">{exp.startDate} — {exp.endDate}</div>
              </div>

              <p className="exp-summary">{exp.summary}</p>

              <div className="exp-section">
                <h4>What I worked on</h4>
                <ul>
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div className="exp-section">
                <h4>Technologies</h4>
                <div className="exp-tags">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="exp-focus">
                <span className="focus-label">Engineering Focus:</span>
                <span className="focus-value">{exp.focus}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
