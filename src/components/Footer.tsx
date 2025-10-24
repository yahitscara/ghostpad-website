import { Github, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="border-t py-12 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            {/* 🎨 BRANDING: Add your logo here */}
            {/* Example: <img src="/path/to/logo.svg" alt="TransparentWrite" className="h-8 mb-4" /> */}
            <h3 className="font-bold text-lg mb-4">TransparentWrite</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The writing app that never gets in your way. Write, watch, and work simultaneously.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors" data-testid="link-features">Features</a></li>
              <li><a href="#download" className="hover:text-foreground transition-colors" data-testid="link-download">Download</a></li>
              <li><a href="#docs" className="hover:text-foreground transition-colors" data-testid="link-docs">Documentation</a></li>
              <li><a href="#changelog" className="hover:text-foreground transition-colors" data-testid="link-changelog">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#help" className="hover:text-foreground transition-colors" data-testid="link-help">Help Center</a></li>
              <li><a href="#community" className="hover:text-foreground transition-colors" data-testid="link-community">Community</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors" data-testid="link-contact">Contact</a></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors" data-testid="link-faq">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-3">Get notified about new features and updates.</p>
            <div className="flex gap-2">
              <Input 
                placeholder="your@email.com" 
                type="email" 
                className="h-9"
                data-testid="input-newsletter"
              />
              <Button size="sm" data-testid="button-subscribe">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 TransparentWrite. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" data-testid="button-github">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" data-testid="button-twitter">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" data-testid="button-email">
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#privacy" className="hover:text-foreground transition-colors" data-testid="link-privacy">Privacy</a>
            <a href="#terms" className="hover:text-foreground transition-colors" data-testid="link-terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
