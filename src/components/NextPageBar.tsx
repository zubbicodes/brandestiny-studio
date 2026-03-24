import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const NextPageBar = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a
      href="#projects"
      className="next-page-bar block interactive"
      onClick={(e) => {
        e.preventDefault();
        scrollTo("#projects");
      }}
    >
      <div className="next-bg" />
      <div className="next-content px-6 md:px-10 py-6">
        <div className="flex items-center gap-3">
          <span className="text-white/40 text-sm font-grotesk">Next</span>
        </div>
        <span className="font-display text-white text-2xl md:text-4xl font-bold">
          Work
        </span>
        <ArrowUpRight size={24} className="text-white" />
      </div>
    </a>
  );
};

export default NextPageBar;
