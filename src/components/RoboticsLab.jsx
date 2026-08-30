import { motion } from 'framer-motion';
import { personalProjects } from '../data/projects';
import './RoboticsLab.css';

export default function RoboticsLab() {
  return (
    <section id="lab" className="robotics-lab">
      <div className="lab-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Building My Own Robotics Stack
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lab-subtitle"
        >
          Personal projects focused on robot development, control systems, and autonomous systems
        </motion.p>

        <motion.div
          className="lab-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="lab-header">
            <h3 className="lab-project-title">{personalProjects.title}</h3>
          </div>

          <div className="lab-content">
            <div className="lab-section">
              <h4>Goal</h4>
              <p>{personalProjects.goal}</p>
            </div>

            <div className="lab-section">
              <h4>Current Stage</h4>
              <p>{personalProjects.currentStage}</p>
            </div>

            <div className="lab-grid">
              <div className="lab-section">
                <h4>Hardware</h4>
                <p>{personalProjects.hardware}</p>
              </div>

              <div className="lab-section">
                <h4>Software</h4>
                <p>{personalProjects.software}</p>
              </div>
            </div>

            <div className="lab-section">
              <h4>What I've Built</h4>
              <p>{personalProjects.whatBuilt}</p>
            </div>

            <div className="lab-section">
              <h4>Next Milestone</h4>
              <p>{personalProjects.nextMilestone}</p>
            </div>
          </div>

          <div className="lab-note">
            This section documents my journey in building complete robotic systems from scratch.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
