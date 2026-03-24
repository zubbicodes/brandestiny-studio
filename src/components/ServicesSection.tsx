import { motion } from "framer-motion";
import serviceArt from "@/assets/service-art.png";
import serviceUx from "@/assets/service-ux.png";
import serviceBranding from "@/assets/service-branding.png";
import project2 from "@/assets/project-2.png";

const serviceCards = [
  {
    name: "Art Direction",
    image: serviceArt,
    tags: ["Visual Strategy", "Creative Direction"],
  },
  {
    name: "UX/UI Design",
    image: serviceUx,
    tags: ["User Research", "Interface Design"],
  },
  {
    name: "Branding",
    image: serviceBranding,
    tags: ["Brand Identity", "Logo Design"],
  },
  {
    name: "Development",
    image: project2,
    tags: ["Web Apps", "Mobile"],
  },
];

const bottomServices = [
  { name: "Brand Identity Creation", indicator: false },
  { name: "Web Design & Development", indicator: false },
  { name: "Mobile Apps", indicator: true },
  { name: "Web Apps", indicator: false },
  { name: "SEO", indicator: false },
  { name: "Devops", indicator: false },
  { name: "SaaS, PaaS and IaaS", indicator: false },
];

const ServicesSection = () => {
  return (
    <section id="services" className="w-full" style={{ background: "var(--black-2)" }}>
      {/* Section header — split layout */}
      <div
        className="flex flex-col md:flex-row"
        style={{ borderTop: "1px solid rgba(255,255,255,0.15)", borderBottom: "1px solid rgba(255,255,255,0.15)" }}
      >
        <div className="md:w-1/2 px-6 md:px-10 py-8" style={{ borderRight: "1px solid rgba(255,255,255,0.15)" }}>
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-5 h-5 rounded-full" style={{ border: "1px solid rgba(255,255,255,0.25)" }} />
            <span className="text-white/60 text-sm font-grotesk">Brand Identity Creation</span>
          </motion.div>
        </div>
        <div className="md:w-1/2 px-6 md:px-10 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="font-display text-[#fde3c6] text-3xl md:text-4xl font-bold mb-3">Key Services</h2>
            <p className="text-white/60 text-sm leading-relaxed max-w-md">
              This is what I focus on.
              <br />
              Additional services are available upon request.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Service cards — horizontal drag scroll */}
      <div className="overflow-hidden">
        <div className="flex gap-4 px-6 md:px-10 py-12 md:py-16 overflow-x-auto grab-cursor" style={{ scrollbarWidth: "none" }}>
          {serviceCards.map((service, i) => (
            <motion.div
              key={service.name}
              className="service-card flex-shrink-0 w-[280px] md:w-[340px] lg:w-[400px] aspect-[3/4] rounded-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <img
                src={service.image}
                alt={service.name}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 z-[2] flex flex-col justify-between p-5">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full" style={{ border: "1px solid rgba(255,255,255,0.4)" }} />
                </div>
                <div>
                  <h3 className="font-display text-white text-2xl md:text-3xl font-bold leading-tight mb-2">
                    {service.name}
                  </h3>
                  <div className="flex gap-2 flex-wrap">
                    {service.tags.map((tag) => (
                      <span key={tag} className="text-white/60 text-xs font-grotesk">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom services grid — matching Figma */}
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}
      >
        {bottomServices.map((service, i) => (
          <motion.div
            key={service.name}
            className="px-6 py-8 flex items-start gap-3"
            style={{
              borderRight: i < bottomServices.length - 1 ? "1px solid rgba(255,255,255,0.15)" : "none",
              borderBottom: "1px solid rgba(255,255,255,0.15)",
            }}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <div
              className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5"
              style={{
                border: "1px solid rgba(255,255,255,0.25)",
                backgroundColor: service.indicator ? "white" : "transparent",
              }}
            />
            <span className="text-white font-display text-lg font-bold">
              {service.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
