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
    <section id="projects" className="w-full px-6 md:px-10 py-20 md:py-32" style={{ background: "var(--black-2)" }}>
      <div className="flex flex-col md:flex-row gap-10 md:gap-0">
        {/* Left: project grid */}
        <motion.div
          className="md:w-[56%]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col gap-[2px]">
            {projects.map((project, i) => (
              <motion.a
                key={project.id}
                href="#"
                className="project-card block relative aspect-[16/10] overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onClick={(e) => e.preventDefault()}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Hover overlay info */}
                <div className="absolute inset-0 z-[2] opacity-0 group-hover:opacity-100 transition-opacity duration-[450ms] flex flex-col justify-end p-4 md:p-5">
                  <div className="flex justify-between items-end w-full">
                    <div>
                      <span className="text-white/80 text-xs font-grotesk tracking-wider uppercase block mb-1">
                        {project.category}
                      </span>
                      <span className="text-white text-sm font-medium">{project.name}</span>
                    </div>
                    <div className="flex gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[#a0a0a0] text-[11px] font-grotesk">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right: heading + CTA — sticky */}
        <motion.div
          className="md:w-[44%] md:pl-16 md:sticky md:top-24 md:self-start"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="flex items-baseline gap-4 mb-3">
            <h2
              className="font-display text-white font-bold leading-none"
              style={{ fontSize: "clamp(3rem, 7vw, 7rem)" }}
            >
              Featured
            </h2>
            <span
              className="font-display text-white/20 font-medium leading-none"
              style={{ fontSize: "clamp(3rem, 7vw, 7rem)" }}
            >
              11
            </span>
          </div>
          <h2
            className="font-display text-white font-bold leading-none mb-10"
            style={{ fontSize: "clamp(3rem, 7vw, 7rem)" }}
          >
            Projects
          </h2>

          <motion.a
            href="#projects"
            className="group inline-flex items-center justify-between gap-4 border text-white text-[13px] font-semibold tracking-wider uppercase px-6 py-4 hover:bg-white hover:text-[#020202] transition-all duration-[450ms] w-full interactive"
            style={{ borderColor: "rgba(255,255,255,0.45)", borderRadius: 10 }}
            onClick={(e) => e.preventDefault()}
            whileHover={{ scale: 1.01 }}
          >
            View All
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
