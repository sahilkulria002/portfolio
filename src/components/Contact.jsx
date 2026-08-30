import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="contact-content"
        >
          <h2 className="contact-heading">Let's build something that moves.</h2>
          
          <p className="contact-description">
            For robotics, automation, engineering projects, collaboration, or interesting technical problems, feel free to reach out.
          </p>

          <div className="contact-links">
            {profile.socialLinks.email && profile.socialLinks.email !== "[ADD EMAIL]" && (
              <a href={`mailto:${profile.socialLinks.email}`} className="contact-link">
                <span className="link-label">Email</span>
                <span className="link-value">{profile.socialLinks.email}</span>
              </a>
            )}
            
            {profile.socialLinks.linkedin && profile.socialLinks.linkedin !== "[ADD LINKEDIN URL]" && (
              <a href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="link-label">LinkedIn</span>
                <span className="link-value">View Profile</span>
              </a>
            )}
            
            {profile.socialLinks.github && profile.socialLinks.github !== "[ADD GITHUB URL]" && (
              <a href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="link-label">GitHub</span>
                <span className="link-value">View Projects</span>
              </a>
            )}
          </div>

          {(!profile.socialLinks.email || profile.socialLinks.email === "[ADD EMAIL]") && (
            <div className="placeholder-info">
              [ADD CONTACT INFORMATION]
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
