import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Kristina Rose",
    role: "Co-Founder, Argonauts",
    text: "Brandestiny has an amazing customer support! Plays a vital role after/in service, the people are very supportive, and respond back quickly with the fixes.",
    avatar: "KR",
  },
  {
    name: "James Mitchell",
    role: "CEO, TechVault",
    text: "The team delivered beyond expectations. Our brand identity went from generic to extraordinary. The attention to detail in every deliverable was exceptional.",
    avatar: "JM",
    featured: true,
  },
  {
    name: "Sarah Chen",
    role: "Founder, NovaBridge",
    text: "Working with Brandestiny was transformative. They didn't just design a website — they created an experience that perfectly communicates our brand story.",
    avatar: "SC",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full px-6 md:px-10 py-24 md:py-36" style={{ background: "var(--black-2)" }}>
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <span className="text-[#fde3c6] text-sm font-grotesk tracking-wider">✦ What they say about us</span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className={`p-7 flex flex-col ${
              t.featured ? "bg-[#121212]" : ""
            }`}
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 0,
            }}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, j) => (
                <span key={j} className="text-[#fde3c6] text-sm">★</span>
              ))}
            </div>

            {t.featured && (
              <div className="mb-5 w-full aspect-[5/3] flex items-center justify-center overflow-hidden" style={{ background: "var(--black-2)" }}>
                <motion.span
                  className="text-[#fde3c6] text-4xl"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  ✦
                </motion.span>
              </div>
            )}

            {t.featured && (
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[#fde3c6] text-xs font-semibold tracking-wider uppercase px-4 py-2.5 w-fit mb-5 hover:bg-[#fde3c6] hover:text-[#020202] transition-all duration-300"
                style={{ border: "1px solid rgba(253,227,198,0.3)", borderRadius: 100 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Book A Call
              </a>
            )}

            <p className="text-white/70 text-sm leading-relaxed mb-8 flex-1">{t.text}</p>

            <div className="flex items-center gap-3 mt-auto">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.05)" }}
              >
                <span className="text-white text-xs font-semibold">{t.avatar}</span>
              </div>
              <div>
                <p className="text-white text-sm font-medium">{t.name}</p>
                <p className="text-white/40 text-xs">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
