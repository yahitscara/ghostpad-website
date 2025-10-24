import { Layers, Zap, FileText, Save, Globe, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Layers,
    title: "Adjustable Opacity",
    description: "Fine-tune transparency from 0% to 100% with instant feedback. See exactly what you need while you write.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Minimal resource usage means smooth performance even on older machines. Start writing in milliseconds.",
  },
  {
    icon: FileText,
    title: "Markdown Support",
    description: "Full markdown editing with live preview. Format your notes with headers, lists, code blocks, and more.",
  },
  {
    icon: Save,
    title: "Auto-Save",
    description: "Never lose your work. Every keystroke is automatically saved to disk in real-time.",
  },
  {
    icon: Globe,
    title: "Cross-Platform",
    description: "Seamless experience across Windows, macOS, and Linux. Your settings sync wherever you work.",
  },
  {
    icon: Sparkles,
    title: "Distraction-Free",
    description: "Minimalist interface that gets out of your way. Focus on writing, not on menus and buttons.",
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-bold mb-6">Designed for Productivity</h2>
          <p className="text-xl text-muted-foreground">
            Every feature crafted to help you write more, faster, without interruption.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 hover-elevate" 
              data-testid={`card-feature-${index}`}
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
