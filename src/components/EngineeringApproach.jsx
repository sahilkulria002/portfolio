import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import './EngineeringApproach.css';

export default function EngineeringApproach() {
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="engineering-approach">
      <div className="approach-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          How I Build Robotic Systems
        </motion.h2>

        <motion.div
          className="approach-steps"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {profile.engineeringApproach.map((item, index) => (
            <motion.div
              key={index}
              className="approach-step"
              variants={itemVariants}
            >
              <div className="step-number">{item.step}</div>
              <div className="step-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              {index < profile.engineeringApproach.length - 1 && (
                <div className="step-connector">↓</div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
