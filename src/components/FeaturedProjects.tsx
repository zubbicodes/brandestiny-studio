import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import project5 from "@/assets/project-5.png";
import project6 from "@/assets/project-6.png";

const projects = [
  { id: 1, image: project1, name: "Furniture & Woodwork", category: "Art Direction", year: "2026", tags: ["Web Design", "Development"] },
  { id: 2, image: project2, name: "FinTech Dashboard", category: "UX/UI Design", year: "2025", tags: ["Mobile App", "Design"] },
  { id: 3, image: project3, name: "Luxury Brand Identity", category: "Branding", year: "2025", tags: ["Brand Identity", "Print"] },
  { id: 4, image: project4, name: "Agency Portfolio", category: "Web Design", year: "2025", tags: ["Web Design", "3D", "Development"] },
  { id: 5, image: project5, name: "Urban Campaign", category: "Art Direction", year: "2024", tags: ["Campaign", "Advertising"] },
  { id: 6, image: project6, name: "Tech Product Launch", category: "3D & Motion", year: "2024", tags: ["3D", "Motion", "Development"] },
];

const FeaturedProjects = () => {
  return (
    <section id="projects" className="w-full py-20 md:py-32" style={{ background: "var(--black-2)" }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row gap-16 md:gap-24 items-start">
        {/* Left: project grid (Scrollable) */}
        <div className="md:w-[60%] space-y-1">
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href="#"
              className="project-card block relative aspect-[16/10] overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: i % 2 * 0.1, // Slight stagger for grid look if needed
                ease: [0.16, 1, 0.3, 1] 
              }}
              onClick={(e) => e.preventDefault()}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Image Overlays / Annotations from image */}
              <div className="absolute top-6 left-6 z-[2]">
                <div className="w-2 h-2 bg-white/40 rounded-full" />
              </div>
              <div className="absolute top-10 left-16 z-[2]">
                <div className="w-12 h-12 border border-white/20 rounded-full" />
              </div>

              {/* Bottom info */}
              <div className="absolute inset-0 z-[2] flex flex-col justify-end p-6 md:p-10 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-[#a0a0a0] text-[10px] font-grotesk tracking-[0.2em] uppercase block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-white text-xl font-bold">{project.name}</h3>
                  </div>
                  <div className="flex gap-4 text-[#a0a0a0] text-[10px] font-grotesk uppercase tracking-wider">
                    {project.tags.join(" • ")}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Right: heading + CTA — Sticky at center */}
        <div className="md:w-[40%] md:sticky md:top-0 md:h-screen flex flex-col justify-center self-start">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-baseline gap-4 mb-2">
              <h2
                className="font-display text-white font-bold leading-[0.9]"
                style={{ fontSize: "clamp(3.5rem, 8vw, 8.5rem)" }}
              >
                Featured
              </h2>
              <span
                className="font-display text-[#333] font-bold leading-none"
                style={{ fontSize: "clamp(3.5rem, 8vw, 8.5rem)" }}
              >
                {projects.length.toString().padStart(2, "0")}
              </span>
            </div>
            <h2
              className="font-display text-white font-bold leading-[0.9] mb-12"
              style={{ fontSize: "clamp(3.5rem, 8vw, 8.5rem)" }}
            >
              Projects
            </h2>

            <motion.a
              href="#projects"
              className="group inline-flex items-center justify-between gap-4 border border-white/20 text-white text-[11px] font-bold tracking-[0.2em] uppercase px-8 py-5 hover:bg-white hover:text-[#020202] transition-all duration-500 w-full rounded-full"
              onClick={(e) => e.preventDefault()}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View All
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
