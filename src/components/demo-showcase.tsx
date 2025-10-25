import { Card } from "@/components/ui/card";
import { PlayCircle, FileText, SlidersHorizontal } from "lucide-react";

export function DemoShowcase() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-bold mb-6">See It In Action</h2>
          <p className="text-xl text-muted-foreground">
            Experience the freedom of transparent writing. Work seamlessly across your digital workspace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="overflow-hidden group hover-elevate" data-testid="card-demo-video">
            <img
              src="https://github.com/yahitscara/ghostpad-website/releases/download/assets-v1.0/demo1.gif"
              alt="Writing while watching videos"
              className="w-full aspect-video object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Write While You Learn</h3>
              <p className="text-muted-foreground">
                Take notes directly over educational videos, tutorials, or lectures without pausing or switching windows.
              </p>
            </div>
          </Card>

          <Card className="overflow-hidden group hover-elevate" data-testid="card-demo-research">
            <img
              src="https://github.com/yahitscara/ghostpad-website/releases/download/assets-v1.0/research_demo.gif"
              alt="Writing over research materials"
              className="w-full aspect-video object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Research Made Easy</h3>
              <p className="text-muted-foreground">
                Read documentation, articles, or webpages while composing your thoughts in real-time.
              </p>
            </div>
          </Card>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="p-8 hover-elevate" data-testid="card-demo-opacity">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-semibold mb-4">Perfect Transparency Control</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Adjust opacity from 10% to 100% with our intuitive slider. Find the perfect balance between your content and what's behind it.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://github.com/yahitscara/ghostpad-website/releases/download/assets-v1.0/transp_demo.gif"
                  alt="Opacity slider control"
                  className="w-full max-w-sm rounded-lg"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
