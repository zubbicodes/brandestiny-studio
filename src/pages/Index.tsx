import NavPill from "@/components/NavPill";
import CustomCursor from "@/components/CustomCursor";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import OurStory from "@/components/OurStory";
import HowWeWork from "@/components/HowWeWork";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import NextPageBar from "@/components/NextPageBar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "var(--black-2)" }}>
      <CustomCursor />
      <NavPill />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedProjects />
      <OurStory />
      <HowWeWork />
      <Testimonials />
      <CTASection />
      <NextPageBar />
      <Footer />
    </div>
  );
};

export default Index;
