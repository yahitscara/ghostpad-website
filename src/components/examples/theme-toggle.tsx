import { ThemeProvider } from "../theme-provider";
import { ThemeToggle } from "../theme-toggle";

export default function ThemeToggleExample() {
  return (
    <ThemeProvider>
      <div className="p-4 flex items-center gap-4">
        <ThemeToggle />
        <span className="text-sm text-muted-foreground">Toggle dark/light mode</span>
      </div>
    </ThemeProvider>
  );
}
