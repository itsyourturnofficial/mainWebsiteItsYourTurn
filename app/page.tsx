import { Navbar } from "@/components/placement/Navbar";
import { ScrollProgress } from "@/components/placement/ScrollProgress";
import { ScrollToTop } from "@/components/placement/ScrollToTop";
import { HeroSection } from "@/components/placement/HeroSection";
import { OverviewSection, ExpertiseSection, ServicesSection, TechMarquee } from "@/components/placement/Sections";
import { TracksSection, ArchitectureSection, IndustrySection } from "@/components/placement/Programs";
import { TeamSection, TestimonialsSection } from "@/components/placement/TeamTestimonials";
import { Footer } from "@/components/placement/Footer";

import { getAllPosts } from "@/lib/blog";
import { LatestInsights } from "@/components/placement/LatestInsights";

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <main className="w-full overflow-hidden bg-brand-base relative">
        <HeroSection />
        <OverviewSection />
        <ExpertiseSection />
        <ServicesSection />
        <TechMarquee />
        <TracksSection />
        <ArchitectureSection />
        <IndustrySection />
        <TeamSection />
        <TestimonialsSection />
        <LatestInsights posts={latestPosts} />
      </main>
      <Footer />
    </>
  );
}
