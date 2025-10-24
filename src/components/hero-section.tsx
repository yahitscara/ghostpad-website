import { Download, Monitor, Apple, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* 🎨 HERO BACKGROUND: Replace the gradient below with your hero image/video */}
      {/* Example: <img src="/path/to/your/hero-image.jpg" alt="Hero background" className="w-full h-full object-cover opacity-40" /> */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background z-10" />
        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 opacity-40" />
      </div>
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight">
            Write. Watch. Work.
            <span className="block text-primary mt-2">Never Switch Windows Again.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The revolutionary writing app that lets you adjust background opacity. 
            Take notes while watching videos, reading articles, or viewing any content behind your editor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 gap-2"
              data-testid="button-download-windows"
            >
              <Monitor className="h-5 w-5" />
              Download for Windows
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 gap-2 bg-background/60 backdrop-blur-sm"
              data-testid="button-download-mac"
            >
              <Apple className="h-5 w-5" />
              Download for macOS
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 gap-2 bg-background/60 backdrop-blur-sm"
              data-testid="button-download-linux"
            >
              <Terminal className="h-5 w-5" />
              Download for Linux
            </Button>
          </div>

          <p className="text-sm text-muted-foreground pt-2">
            Join 10,000+ writers and multitaskers who never miss a moment
          </p>
        </div>
      </div>
    </section>
  );
}
