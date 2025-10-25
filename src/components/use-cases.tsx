import { Card } from "@/components/ui/card";
import { GraduationCap, Code, BookOpen, Presentation } from "lucide-react";

const useCases = [
  {
    icon: GraduationCap,
    title: "Students & Learners",
    description: "Take comprehensive notes during online lectures or while watching educational content. Never miss important details by pausing to write.",
    benefit: "Capture every insight without breaking focus",
  },
  {
    icon: Code,
    title: "Developers",
    description: "Jot down ideas while reading documentation or Stack Overflow. Capture code snippets and notes without losing your place.",
    benefit: "Document thoughts while staying in context",
  },
  {
    icon: BookOpen,
    title: "Writers & Researchers",
    description: "Compile notes from multiple sources simultaneously. Keep reference materials visible while drafting your thoughts.",
    benefit: "Transform research into writing seamlessly",
  },
  {
    icon: Presentation,
    title: "Content Creators",
    description: "Script videos while watching reference material. Plan content while monitoring trends and competitor analysis.",
    benefit: "Create better content with context at hand",
  },
];

export function UseCases() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-bold mb-6">Who It's For</h2>
          <p className="text-xl text-muted-foreground">
            From students to professionals, transparent writing transforms how you work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card 
              key={index} 
              className="p-8 hover-elevate"
              data-testid={`card-usecase-${index}`}
            >
              <div className="flex items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-lg flex-shrink-0">
                  <useCase.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">{useCase.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  <p className="text-sm font-medium text-primary">
                    ✓ {useCase.benefit}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
