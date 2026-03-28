import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import CustomCursor from "@/components/CustomCursor";
import NavPill from "@/components/NavPill";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

gsap.registerPlugin(ScrollTrigger);

import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import project5 from "@/assets/project-5.png";
import project6 from "@/assets/project-6.png";

const caseStudies = [
  {
    id: 1,
    title: "Google Website",
    image: project1,
    category: "Development",
    nda: true,
  },
  {
    id: 2,
    title: "Sable App",
    image: project2,
    category: "Mobile App",
    nda: false,
  },
  {
    id: 3,
    title: "Seen Brand",
    image: project3,
    category: "Branding",
    nda: false,
  },
  {
    id: 4,
    title: "Airbnb App",
    image: project4,
    category: "UI/UX Design",
    nda: true,
  },
  {
    id: 5,
    title: "Seen Website",
    image: project5,
    category: "Web Design",
    nda: false,
  },
  {
    id: 6,
    title: "Creative Studio",
    image: project6,
    category: "Art Direction",
    nda: false,
  },
];

const CaseStudies = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !triggerRef.current) return;

    const totalWidth = sectionRef.current.scrollWidth - window.innerWidth;

    gsap.to(sectionRef.current, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${totalWidth}`,
        invalidateOnRefresh: true,
      },
    });
  }, { scope: triggerRef });

  return (
    <SmoothScroll>
      <div className="bg-black text-white">
        <CustomCursor />
        <NavPill />
        
        <main ref={triggerRef} className="overflow-hidden pt-24 md:pt-32">
          <div 
            ref={sectionRef}
            className="flex items-center h-[85vh] w-fit px-6 md:px-12 gap-12 md:gap-24"
          >
            {/* Header / Heading - Now the first item in the horizontal track */}
            <div className="min-w-[70vw] md:min-w-[500px] flex flex-col justify-center flex-shrink-0">
              <div className="flex flex-col gap-8">
                <h1 
                  className="font-display font-bold tracking-tight leading-[0.9]"
                  style={{ fontSize: "clamp(3.5rem, 8vw, 7.5rem)" }}
                >
                  Case <br /> Studies
                </h1>
                <div className="max-w-xs text-gray-500 font-grotesk text-sm uppercase tracking-widest leading-relaxed">
                  Explorations of digital <br />
                  products and brand <br />
                  identities that push boundaries.
                </div>
                <div className="mt-8 flex items-center gap-4 text-white/30 text-xs font-bold tracking-widest uppercase">
                  <span>Scroll to explore</span>
                  <div className="w-12 h-[1px] bg-white/10" />
                </div>
              </div>
            </div>

            {/* Cards section */}
            <div className="flex gap-4 md:gap-8 items-center h-full">
              {caseStudies.map((study) => (
                <motion.div
                  key={study.id}
                  className="relative w-[85vw] md:w-[420px] aspect-[4/5] md:aspect-[3/4] rounded-[2.5rem] overflow-hidden group flex-shrink-0"
                  whileHover={{ scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* NDA Badge */}
                  {study.nda && (
                    <div className="absolute top-10 left-10">
                      <div className="bg-white text-black px-5 py-2 rounded-full shadow-2xl">
                        <span className="text-[10px] font-bold tracking-widest uppercase">Project under NDA</span>
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="absolute bottom-10 left-10 right-10">
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      {study.title}
                    </h3>
                    <div className="h-[1px] w-0 group-hover:w-full bg-white/30 transition-all duration-700 mb-4" />
                    <p className="text-gray-400 text-xs md:text-sm uppercase tracking-[0.2em] font-medium">
                      {study.category}
                    </p>
                  </div>

                  <Link 
                    to={`/case-studies/${study.id}`}
                    className="absolute inset-0 z-10"
                  />
                </motion.div>
              ))}
            </div>
            
            {/* End spacer for padding */}
            <div className="w-20 md:w-40 flex-shrink-0 h-1" />
          </div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default CaseStudies;
