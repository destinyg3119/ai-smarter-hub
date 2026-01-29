const About = () => {
  return (
    <section id="about" className="py-24 relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            About the Platform
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            NexusAI is a demonstration platform showcasing the possibilities of modern AI integration. 
            Built with cutting-edge technology, this platform serves as a proof of concept for 
            intelligent automation, natural language processing, and machine learning capabilities.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This demo illustrates how businesses can leverage artificial intelligence to streamline 
            operations, enhance decision-making, and create more efficient workflows. The clean, 
            minimal interface reflects our commitment to user-centric design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
