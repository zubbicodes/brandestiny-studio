import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import project5 from "@/assets/project-5.png";
import project6 from "@/assets/project-6.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, image: project1, name: "BRANT", year: "2025", tags: ["Art Direction", "Website Design", "Brand", "Development"] },
  { id: 2, image: project2, name: "MONOLITH", year: "2025", tags: ["3D Modeling", "UX/UI Design", "Brand Strategy"] },
  { id: 3, image: project3, name: "SABLE", year: "2025", tags: ["Mobile App", "Brand Identity", "Development"] },
  { id: 4, image: project4, name: "SEEN", year: "2025", tags: ["Art Direction", "Web Design", "3D Animation"] },
  { id: 5, image: project5, name: "GLOW", year: "2024", tags: ["Campaign", "Advertising"] },
  { id: 6, image: project6, name: "TECH", year: "2024", tags: ["3D", "Motion", "Development"] },
];

const FeaturedProjects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !rightColumnRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      ScrollTrigger.create({
        trigger: rightColumnRef.current,
        start: "top top",
        endTrigger: containerRef.current,
        end: "bottom bottom",
        pin: true,
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="projects" className="w-full py-20 bg-black">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row gap-16 md:gap-24 items-start">
        {/* Left: Project Cards Grid (Scrollable) */}
        <div className="md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
          {projects.map((project) => (
            <div key={project.id} className="group flex flex-col cursor-pointer">
              {/* Card Header */}
              <div className="flex justify-between items-baseline mb-4">
                <span className="text-white text-[12px] font-bold tracking-[0.15em] uppercase">
                  {project.name}
                </span>
                <span className="text-white/40 text-[12px] font-medium tracking-widest">
                  {project.year}
                </span>
              </div>

              {/* Project Image Container */}
              <div className="relative aspect-square bg-[#0c0c0c] overflow-hidden mb-6 rounded-sm">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.05] transition-all duration-1000 ease-out"
                  loading="lazy"
                />
                <Link to={`/case-studies/${project.id}`} className="absolute inset-0 z-10" />
              </div>

              {/* Tags / Categories List */}
              <div className="flex flex-col gap-1">
                {project.tags.map((tag, index) => (
                  <span key={index} className="text-white/40 text-[12px] font-medium tracking-wide leading-relaxed">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right: Featured Projects Heading + CTA (Pinned) */}
        <div ref={rightColumnRef} className="md:w-2/5 flex flex-col">
          <div className="flex flex-col gap-12">
            {/* Heading Area */}
            <div className="flex justify-between items-start">
              <h2 className="font-display text-white text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight">
                Featured <br /> Projects
              </h2>
              <span className="font-display text-white/20 text-6xl md:text-7xl lg:text-8xl font-bold leading-none">
                11
              </span>
            </div>

            {/* Custom Styled View All Link */}
            <Link
              to="/case-studies"
              className="group relative flex items-center justify-between border border-white/20 rounded-full px-8 py-5 hover:bg-white hover:text-black transition-all duration-500 overflow-hidden"
            >
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase z-10">
                View All
              </span>
              <span className="text-[12px] font-medium opacity-60 z-10 group-hover:opacity-100 transition-opacity">
                44
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
