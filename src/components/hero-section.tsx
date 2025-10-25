import { Download, Monitor, Apple, Terminal, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* 🎨 HERO BACKGROUND: Replace the gradient below with your hero image/video */}
      {/* Example: <img src="/path/to/your-hero-image.jpg" alt="Hero background" className="w-full h-full object-cover opacity-40" /> */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background z-10" />
        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 opacity-40" />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center mb-6 pt-8">
            <img
              src={`${import.meta.env.BASE_URL}android-chrome-512x512.png`}
              alt="GhostPad Logo"
              className="h-32 w-32 md:h-40 md:w-40"
            />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight">
            Write. Watch. Work.
            <span className="block text-primary mt-2">Never Switch Windows Again.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            The ultimate writing companion for multitaskers.
            Take notes during Zoom calls, watch tutorials, read documentation - all without switching windows.
          </p>

          <div className="flex flex-col items-center gap-3 pt-4">
            <p className="text-sm text-muted-foreground">
              GhostPad is free (for now). Coffee keeps the features brewing ☕
            </p>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 gap-2 bg-background/60 backdrop-blur-sm border-2 border-primary/50 hover:bg-primary/10"
              asChild
            >
              <a href="https://buymeacoffee.com/yahitscara" target="_blank" rel="noopener noreferrer">
                <Coffee className="h-5 w-5" />
                Buy Me a Coffee
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
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
        </div>
      </div>
    </section>
  );
}
