import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#story" },
  { label: "Contact", href: "#contact" },
  { label: "Cookies Policy", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "(X) Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Behance", href: "#" },
  { label: "Dribbble", href: "#" },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full" style={{ background: "var(--black-2)" }}>
      {/* Tag bar */}
      <div className="flex">
        <div className="px-6 py-3" style={{ background: "#fde3c6", width: "fit-content" }}>
          <span className="text-[#020202] text-sm font-grotesk font-medium uppercase tracking-wider">
            <span className="font-bold">BR</span>ANDESTINY
          </span>
        </div>
      </div>

      {/* Main footer content */}
      <div className="px-6 md:px-10 pt-10 pb-6">
        <div className="flex flex-col md:flex-row gap-10 md:gap-8 mb-12">
          {/* Column 1: Navigation */}
          <div className="md:w-[30%]">
            <h4 className="text-white/40 text-xs font-grotesk uppercase tracking-wider mb-5">Menu</h4>
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white text-sm hover:opacity-50 transition-opacity duration-[400ms] py-0.5 interactive"
                  onClick={(e) => {
                    if (link.href.startsWith("#")) {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Social */}
          <div className="md:w-[30%]">
            <h4 className="text-white/40 text-xs font-grotesk uppercase tracking-wider mb-5">Social</h4>
            <div className="flex flex-col gap-1.5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white text-sm hover:opacity-50 transition-opacity duration-[400ms] py-0.5 interactive"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Newsletter */}
          <div className="md:w-[40%] md:ml-auto">
            <h4 className="text-white/40 text-xs font-grotesk uppercase tracking-wider mb-5">Newsletter</h4>
            <div className="p-5" style={{ background: "#fde3c6" }}>
              <p className="text-[#020202] text-sm mb-4 leading-relaxed">
                Subscribe to our newsletter for insights on branding, design trends, and creative strategies.
              </p>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="newsletter-input w-full pr-14"
                />
                <button
                  className="absolute right-0 top-0 bottom-0 px-4 flex items-center justify-center interactive hover:opacity-70 transition-opacity"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                >
                  <ArrowUpRight size={18} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div
          className="pt-5 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <button
            onClick={scrollToTop}
            className="text-white text-sm font-medium hover:opacity-50 transition-opacity interactive"
          >
            To top ↑
          </button>
          <span className="text-white/40 text-sm">New York & Belgrade</span>
          <span className="text-white text-sm font-medium">© 2026 Brandestiny</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
