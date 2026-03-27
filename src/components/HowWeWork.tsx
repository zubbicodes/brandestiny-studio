import { motion } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "1",
    title: "Align on your key product goal",
    description: "Start with what matters-your core product objective. We build solutions around real user needs to set a strong foundation for growth.",
  },
  {
    number: "2",
    title: "Always more than one solution",
    description: "I don't deliver just one route. You get options, explorations and clear directions.",
  },
  {
    number: "3",
    title: "Build & iterate rapidly",
    description: "Using modern tech stacks and agile processes, we deliver working products fast — then refine based on real user feedback.",
  },
];

const HowWeWork = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className="w-full relative" style={{ background: "var(--black-2)" }}>
      {/* Main Heading — Centered and large */}
      <div className="h-screen flex flex-col items-center justify-center px-6 text-center">
        <motion.h2 
          className="text-white font-display font-medium leading-[1.1] max-w-4xl"
          style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          I turn raw ideas into products that work and grow.
        </motion.h2>
        
        {/* Scroll indicator or line starting from here */}
        <div className="mt-20 w-[1px] h-32 border-l border-dashed border-[#2d5af1]/40" />
      </div>

      {/* Steps Container — Stacking Effect */}
      <div className="relative">
        {/* Vertical Dashed Line connecting everything */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] border-l border-dashed border-[#2d5af1]/30 z-[1]" />

        {steps.map((step, i) => (
          <div 
            key={step.number} 
            className="relative h-[120vh]"
            style={{ zIndex: i + 2 }}
          >
            <div 
              className="sticky top-0 h-screen flex items-center justify-center overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
              style={{ background: "var(--black-2)" }}
            >
              <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center relative h-full justify-center">
                
                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                  {/* Left Title */}
                  <motion.div 
                    className="md:w-1/3 text-center md:text-left"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: "-20%" }}
                    transition={{ duration: 0.8 }}
                  >
                    <h3 className="text-white font-display font-medium text-2xl md:text-4xl leading-tight">
                      {step.title}
                    </h3>
                  </motion.div>

                  {/* Center Large Number */}
                  <motion.div 
                    className="md:w-1/3 flex justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ margin: "-20%" }}
                    transition={{ duration: 0.8 }}
                  >
                    <span 
                      className="text-white font-display font-bold leading-none select-none"
                      style={{ fontSize: "clamp(12rem, 25vw, 30rem)" }}
                    >
                      {step.number}
                    </span>
                  </motion.div>

                  {/* Right Description */}
                  <motion.div 
                    className="md:w-1/3 text-center md:text-right flex md:justify-end"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: "-20%" }}
                    transition={{ duration: 0.8 }}
                  >
                    <p className="text-white/70 font-display text-base md:text-lg leading-relaxed max-w-[320px]">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Step Button — Pink/Peach as in image */}
                <motion.div 
                  className="mt-12 md:mt-16 z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: "-10%" }}
                >
                  <a 
                    href="#contact"
                    className="inline-flex items-center justify-center bg-[#f78ca0] text-black font-bold text-xs md:text-sm tracking-widest uppercase px-10 py-4 rounded-xl hover:scale-105 transition-transform shadow-lg"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    BOOK INTRO CALL
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Space at the end */}
      <div className="h-32" style={{ background: "var(--black-2)" }} />
    </section>
  );
};

export default HowWeWork;
