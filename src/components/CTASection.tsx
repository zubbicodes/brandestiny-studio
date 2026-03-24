import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = ["WEBSITE", "MOBILE APP", "WEB APP", "BRAND", "SOCIAL MEDIA"];

const CTASection = () => {
  return (
    <section id="contact" className="w-full px-6 md:px-10 py-24 md:py-36" style={{ background: "var(--black-2)" }}>
      <div className="text-center max-w-5xl mx-auto">
        <motion.p
          className="text-white/50 text-lg mb-8 font-grotesk"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Let's talk about your
        </motion.p>

        <div className="flex flex-col items-center mb-14">
          {services.map((service, i) => (
            <motion.span
              key={service}
              className="font-display text-white font-bold leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 6.5rem)" }}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
            >
              {service}
            </motion.span>
          ))}
        </div>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="mailto:info@brandestiny.co"
            className="inline-flex items-center gap-3 text-[#020202] text-[13px] font-semibold tracking-wider uppercase px-7 py-4 hover:brightness-110 transition-all duration-300"
            style={{ background: "#fde3c6", borderRadius: 100 }}
          >
            Let's Connect
            <ArrowRight size={14} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-white text-[13px] font-semibold tracking-wider uppercase px-7 py-4 hover:bg-white hover:text-[#020202] transition-all duration-300"
            style={{ border: "1px solid rgba(255,255,255,0.35)", borderRadius: 100 }}
            onClick={(e) => e.preventDefault()}
          >
            Book a Call
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>

      {/* Marquee brand strip */}
      <motion.div
        className="mt-24 md:mt-36 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="marquee-track">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-8 flex-shrink-0">
              <span
                className="font-display text-white/[0.06] font-bold whitespace-nowrap tracking-tight"
                style={{ fontSize: "clamp(4rem, 8vw, 8rem)" }}
              >
                BRANDESTINY
              </span>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center flex-shrink-0" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                <motion.span
                  className="text-[8px] md:text-[10px] font-grotesk text-white/30 uppercase tracking-[0.2em]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  ✦
                </motion.span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
