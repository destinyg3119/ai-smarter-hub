const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
              <span className="text-primary font-bold text-xs">AI</span>
            </div>
            <span className="text-muted-foreground text-sm">NexusAI</span>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              PROJECT_ID: PUZZLE-16-DEMO
            </p>
          </div>

          <p className="text-muted-foreground text-sm">
            © 2025 NexusAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
