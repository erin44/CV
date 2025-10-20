import { Mail, Linkedin, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cvData } from "@/data/cvData";

const Contact = () => {
  const iconMap: Record<string, any> = {
    linkedin: Linkedin,
    github: Github,
    mail: Mail,
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat. 
            Feel free to reach out through any of the following channels.
          </p>
        </div>

        <Card className="p-8 shadow-soft max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {cvData.social.map((social, index) => {
              const Icon = iconMap[social.icon.toLowerCase()] || Mail;
              return (
                <Button
                  key={index}
                  asChild
                  size="lg"
                  className="gradient-primary hover:opacity-90 transition-opacity shadow-soft min-w-[140px]"
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Icon className="w-5 h-5" />
                    {social.platform}
                  </a>
                </Button>
              );
            })}
          </div>
        </Card>

        <footer className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {cvData.personal.name}. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
