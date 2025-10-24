import { Download, Monitor, Apple, Terminal } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const downloads = [
  {
    platform: "Windows",
    icon: Monitor,
    version: "v2.1.0",
    size: "45 MB",
    requirements: "Windows 10 or later",
    testId: "card-download-windows",
  },
  {
    platform: "macOS",
    icon: Apple,
    version: "v2.1.0",
    size: "38 MB",
    requirements: "macOS 11.0 or later",
    testId: "card-download-macos",
  },
  {
    platform: "Linux",
    icon: Terminal,
    version: "v2.1.0",
    size: "42 MB",
    requirements: "Ubuntu 20.04+ / Debian 11+",
    testId: "card-download-linux",
  },
];

export function DownloadSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-bold mb-6">Download Now</h2>
          <p className="text-xl text-muted-foreground">
            Choose your platform and start writing transparently in seconds.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {downloads.map((download) => (
            <Card 
              key={download.platform} 
              className="p-8 flex flex-col items-center text-center hover-elevate"
              data-testid={download.testId}
            >
              <download.icon className="h-16 w-16 mb-6 text-primary" />
              <h3 className="text-2xl font-semibold mb-2">{download.platform}</h3>
              <div className="flex gap-2 mb-6">
                <Badge variant="secondary">{download.version}</Badge>
                <Badge variant="outline">{download.size}</Badge>
              </div>
              <Button 
                className="w-full mb-4 gap-2" 
                size="lg"
                data-testid={`button-download-${download.platform.toLowerCase()}`}
              >
                <Download className="h-4 w-4" />
                Download
              </Button>
              <p className="text-sm text-muted-foreground">{download.requirements}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
