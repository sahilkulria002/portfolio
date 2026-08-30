import { profile } from '../data/profile';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>{profile.name}</h3>
            <p>Robotics Engineer</p>
          </div>

          <div className="footer-links">
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
            {profile.socialLinks.email && profile.socialLinks.email !== "[ADD EMAIL]" && (
              <a href={`mailto:${profile.socialLinks.email}`}>
                Email
              </a>
            )}
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-text">
            Built for robotics. Deployed on GitHub Pages.
          </p>
          <p className="footer-copyright">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
