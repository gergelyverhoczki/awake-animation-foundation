import { ArrowUpRight } from "lucide-react";
import { studioContact } from "@/lib/studio";

export function Contact() {
  return (
    <section
      id="contact"
      className="contact-section section-anchor"
      aria-labelledby="contact-heading"
    >
      <span className="section-number">03 / GET IN TOUCH</span>
      <div className="contact-heading">
        <h2 id="contact-heading">
          Let’s talk<span className="heading-period">.</span>
        </h2>
        <ArrowUpRight aria-hidden="true" />
      </div>
      <div className="contact-details">
        {studioContact.email ? (
          <a className="email-link" href={`mailto:${studioContact.email}`}>
            {studioContact.email}
            <ArrowUpRight size={20} />
          </a>
        ) : (
          <span className="placeholder-copy">Contact details coming soon.</span>
        )}
        <div className="social-links">
          {studioContact.socials.map((social) => (
            <a key={social.url} href={social.url} target="_blank" rel="noopener noreferrer">
              {social.label}
              <ArrowUpRight size={14} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
