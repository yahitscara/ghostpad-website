import { HeroSection } from "@/components/hero-section";
import { DemoShowcase } from "@/components/demo-showcase";
import { FeaturesGrid } from "@/components/features-grid";
import { DownloadSection } from "@/components/download-section";
import { UseCases } from "@/components/use-cases";
import { Footer } from "@/components/footer";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 right-0 p-4 z-50">
        <ThemeToggle />
      </nav>
      
      <HeroSection />
      <DemoShowcase />
      <FeaturesGrid />
      <UseCases />
      <DownloadSection />
      <Footer />
    </div>
  );
}
