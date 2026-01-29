import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

const Contact = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo submission
    console.log("Submitted email:", email);
    setEmail("");
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground mb-8">
            Interested in learning more? Drop your email and we'll reach out.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 bg-card border-border focus:border-primary focus:ring-primary"
            />
            <Button type="submit" variant="hero" size="lg" className="gap-2">
              <Send className="w-4 h-4" />
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
