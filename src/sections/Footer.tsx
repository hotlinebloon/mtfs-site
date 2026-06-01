import { contact } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-brand">
        <img src="/MTFS.png" alt="MTFS logo" />

        <div>
          <strong>Mapping the Future with STEM</strong>
          <p>© 2026 Mapping the Future with STEM. All rights reserved.</p>
        </div>
      </div>

      <div className="footer-links" aria-label="Social links">
        <a href="#" aria-label="Instagram">
          <InstagramIcon />
        </a>

        <a href="#" aria-label="LinkedIn">
          <LinkedInIcon />
        </a>

        <a href="#" aria-label="Facebook">
          <FacebookIcon />
        </a>

        <a href={`mailto:${contact.email}`} aria-label="Email">
          <EmailIcon />
        </a>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 9v11" />
      <path d="M6 5v.1" />
      <path d="M10 20v-7c0-2 1.3-4 4-4s4 2 4 5v6" />
      <path d="M10 9v11" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.6.4-1 1-1Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="6" width="16" height="12" rx="2" />
      <path d="M4 8l8 6 8-6" />
    </svg>
  );
}
