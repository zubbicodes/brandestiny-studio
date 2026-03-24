import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const OurStory = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="story" className="w-full px-6 md:px-10 py-24 md:py-36" style={{ background: "var(--black-2)" }}>
      <div className="max-w-3xl mx-auto">
        <motion.span
          className="text-[#fde3c6] text-sm font-grotesk tracking-wider uppercase mb-8 block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ✦ Our Story
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-white text-lg md:text-xl leading-relaxed mb-6">
            Established in 2014, Brandestiny was created with a simple purpose – to offer the kind of service our founders wished they had for their own ventures. Built on values that truly matter, we have grown by staying true to that ethos.
          </p>
          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-12">
            Our independence allows us to carve our own path, free from corporate red tape or the need to follow trends dictated by big tech. Instead, we offer advice and strategies tailored specifically to your business, always focused on your goals.
          </p>
        </motion.div>

        <motion.button
          onClick={() => scrollTo("#contact")}
          className="group inline-flex items-center gap-3 text-[#fde3c6] text-[13px] font-semibold tracking-wider uppercase px-6 py-3.5 hover:bg-[#fde3c6] hover:text-[#020202] transition-all duration-[450ms] interactive"
          style={{ border: "1px solid rgba(253, 227, 198, 0.35)", borderRadius: 100 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Book a Call
          <ArrowRight size={14} />
        </motion.button>
      </div>
    </section>
  );
};

export default OurStory;
