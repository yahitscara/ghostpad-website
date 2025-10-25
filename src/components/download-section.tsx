import { Download, Monitor, Apple, Terminal } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const downloads = [
  {
    platform: "Windows",
    icon: Monitor,
    version: "Latest",
    urls: {
      installer: "https://github.com/yahitscara/ghostpad/releases/latest/download/GhostPad-Setup.exe",
      portable: "https://github.com/yahitscara/ghostpad/releases/latest/download/GhostPad-Portable.exe",
    },
    requirements: "Windows 10 or later",
    testId: "card-download-windows",
  },
  {
    platform: "macOS",
    icon: Apple,
    version: "Latest",
    urls: {
      intel: "https://github.com/yahitscara/ghostpad/releases/latest/download/GhostPad-x64.dmg",
      silicon: "https://github.com/yahitscara/ghostpad/releases/latest/download/GhostPad-arm64.dmg",
    },
    requirements: "macOS 11.0 or later",
    testId: "card-download-macos",
  },
  {
    platform: "Linux",
    icon: Terminal,
    version: "Latest",
    urls: {
      appimage: "https://github.com/yahitscara/ghostpad/releases/latest/download/GhostPad.AppImage",
      deb: "https://github.com/yahitscara/ghostpad/releases/latest/download/ghostpad_amd64.deb",
    },
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
              </div>

              {/* Windows downloads */}
              {download.platform === "Windows" && (
                <div className="w-full space-y-2 mb-4">
                  <Button
                    className="w-full gap-2"
                    size="lg"
                    asChild
                  >
                    <a href={download.urls.installer} download>
                      <Download className="h-4 w-4" />
                      Installer
                    </a>
                  </Button>
                  <Button
                    className="w-full gap-2"
                    size="sm"
                    variant="outline"
                    asChild
                  >
                    <a href={download.urls.portable} download>
                      Portable Version
                    </a>
                  </Button>
                </div>
              )}

              {/* macOS downloads */}
              {download.platform === "macOS" && (
                <div className="w-full space-y-2 mb-4">
                  <Button
                    className="w-full gap-2"
                    size="lg"
                    asChild
                  >
                    <a href={download.urls.silicon} download>
                      <Download className="h-4 w-4" />
                      Apple Silicon
                    </a>
                  </Button>
                  <Button
                    className="w-full gap-2"
                    size="sm"
                    variant="outline"
                    asChild
                  >
                    <a href={download.urls.intel} download>
                      Intel Mac
                    </a>
                  </Button>
                </div>
              )}

              {/* Linux downloads */}
              {download.platform === "Linux" && (
                <div className="w-full space-y-2 mb-4">
                  <Button
                    className="w-full gap-2"
                    size="lg"
                    asChild
                  >
                    <a href={download.urls.appimage} download>
                      <Download className="h-4 w-4" />
                      AppImage
                    </a>
                  </Button>
                  <Button
                    className="w-full gap-2"
                    size="sm"
                    variant="outline"
                    asChild
                  >
                    <a href={download.urls.deb} download>
                      .deb Package
                    </a>
                  </Button>
                </div>
              )}

              <p className="text-sm text-muted-foreground">{download.requirements}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
