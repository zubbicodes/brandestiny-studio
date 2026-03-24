import { motion } from "framer-motion";
import heroImg from "@/assets/hero-astronaut.png";
import project1 from "@/assets/project-1.png";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden" style={{ background: "var(--black-2)" }}>
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 z-[1]" style={{
        background: "linear-gradient(to bottom, rgba(2,2,2,0) 0%, rgba(2,2,2,0) 50%, rgba(2,2,2,0.7) 100%)"
      }} />
      <div className="absolute inset-0 z-[1]" style={{
        background: "radial-gradient(ellipse at center, transparent 30%, rgba(2,2,2,0.6) 100%)"
      }} />

      {/* Hero visual — astronaut */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src={heroImg}
          alt="Creative visual"
          className="w-[300px] md:w-[400px] lg:w-[500px] xl:w-[560px] object-contain"
          style={{
            filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.5))",
            animation: "float 6s ease-in-out infinite",
          }}
        />
      </motion.div>

      {/* Bottom nav labels — editorial style / artemiilebedev */}
      <div className="absolute bottom-14 md:bottom-20 left-0 right-0 z-[2] px-6 md:px-10 flex justify-between items-end">
        <motion.button
          onClick={() => scrollTo("#projects")}
          className="font-display text-white font-bold leading-none hover-blur interactive"
          style={{ fontSize: "clamp(3rem, 7vw, 7rem)" }}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Work
        </motion.button>

        <motion.button
          onClick={() => scrollTo("#services")}
          className="font-display text-white font-bold leading-none hover-blur interactive"
          style={{ fontSize: "clamp(3rem, 7vw, 7rem)" }}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          Services
        </motion.button>
      </div>

      {/* Announcement card — cream background */}
      <motion.div
        className="absolute bottom-14 md:bottom-20 right-6 md:right-10 z-[3] hidden lg:flex"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        <a
          href="#projects"
          className="flex items-start gap-3 p-[6px] text-[#020202] no-underline hover:scale-[1.02] transition-transform duration-300"
          style={{ background: "#ffeddc", maxWidth: "26rem" }}
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#projects");
          }}
        >
          <div className="w-[120px] h-[100px] flex-shrink-0 overflow-hidden">
            <img src={project1} alt="Latest project" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center py-1 pr-2">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-grotesk font-medium uppercase tracking-wider text-[#020202]/60">
                new project
              </span>
              <span className="text-[14px]">↗</span>
            </div>
            <h4 className="text-[15px] font-semibold leading-tight mt-1 text-[#020202]">
              Furniture & Woodwork
            </h4>
            <p className="text-[12px] text-[#020202]/50 mt-0.5">
              Web Design & Development
            </p>
          </div>
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[2]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <motion.div
          className="w-[1px] h-10 bg-white/40"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
