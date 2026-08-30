import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import './Projects.css';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="project-label">BUILD {String(index + 1).padStart(3, '0')}</div>
              <div className="project-category">{project.category}</div>

              <div className="project-image">
                {project.image !== "[ADD IMAGE PATH]" ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="placeholder-image">
                    <div className="placeholder-content">
                      <span>PROJECT IMAGE</span>
                      <small>{project.category}</small>
                    </div>
                  </div>
                )}
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.github !== "[ADD GITHUB URL]" && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                )}
                {project.demo !== "[ADD DEMO URL]" && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                )}
                <a href="#projects" className="more-link">
                  Case Study →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
