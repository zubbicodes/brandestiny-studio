import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Align on your key product goal",
    description: "Start with what matters: your core product objective. We build solutions around real user needs to set a strong foundation for growth.",
  },
  {
    number: "02",
    title: "Design with precision",
    description: "Every pixel matters. We craft interfaces that are both beautiful and functional, ensuring your users have a seamless experience.",
  },
  {
    number: "03",
    title: "Build & iterate rapidly",
    description: "Using modern tech stacks and agile processes, we deliver working products fast — then refine based on real user feedback.",
  },
];

const HowWeWork = () => {
  return (
    <section className="w-full px-6 md:px-10 py-24 md:py-36 relative overflow-hidden" style={{ background: "var(--black-2)" }}>
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(253,227,198,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10">
        <motion.div
          className="text-center mb-20 md:mb-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="font-display text-white font-bold leading-tight"
            style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)" }}
          >
            How we turn startup
            <br />
            <span className="italic text-[#fde3c6]">goals into results</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <span
                className="font-display text-white/10 font-bold mb-5"
                style={{ fontSize: "clamp(4rem, 6vw, 6rem)" }}
              >
                {step.number}
              </span>
              <h3 className="text-white text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
              <div className="mt-6 w-full h-[1px]" style={{ background: "rgba(255,255,255,0.1)" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
