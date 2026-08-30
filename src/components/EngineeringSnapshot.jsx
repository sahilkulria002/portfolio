import { motion } from 'framer-motion';
import './EngineeringSnapshot.css';

export default function EngineeringSnapshot() {
  const snapshots = [
    { label: 'Robotics', icon: '🤖' },
    { label: 'Control Systems', icon: '⚙️' },
    { label: 'Simulation', icon: '🔬' },
    { label: 'Industrial Automation', icon: '🏭' },
    { label: 'ROS 2', icon: '📦' },
    { label: 'C++ / Python', icon: '💻' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="snapshot">
      <div className="snapshot-container">
        <motion.div
          className="snapshot-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Engineering Scope</h2>
          <p>Quick overview of my technical focus areas</p>
        </motion.div>

        <motion.div
          className="snapshot-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {snapshots.map((item, index) => (
            <motion.div
              key={index}
              className="snapshot-item"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="snapshot-icon">{item.icon}</div>
              <div className="snapshot-label">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
