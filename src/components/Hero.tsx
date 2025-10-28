import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, FileText } from "lucide-react";
import { cvData } from "@/data/cvData";
import { scrollToSection } from "@/lib/scrollUtils";
import { trackDownload } from "@/lib/analytics";

const Hero = () => {
  const { personal } = cvData;

  const handleCVDownload = () => {
    trackDownload('Erin_Kerciku_CV.pdf');
    if (personal.cvUrl) {
      window.open(personal.cvUrl, '_blank');
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="max-w-4xl w-full text-center space-y-8 animate-fade-in relative z-10">
        {/* Profile Image */}
        <div className="flex justify-center mb-8">
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-soft border-4 border-white">
            <img 
              src={personal.image} 
              alt={personal.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name and Title */}
        <div className="space-y-3">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">
            {personal.name}
          </h1>
          <p className="text-xl md:text-2xl text-primary font-medium">
            {personal.title}
          </p>
        </div>

        {/* Summary */}
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {personal.summary}
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-4 text-base text-muted-foreground">
          {personal.email && (
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              {personal.email}
            </a>
          )}
          {personal.phone && (
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              {personal.phone}
            </span>
          )}
          {personal.location && (
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {personal.location}
            </span>
          )}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          {personal.cvUrl && (
            <Button
              size="lg"
              className="gradient-primary hover:opacity-90 transition-opacity shadow-soft"
              onClick={handleCVDownload}
            >
              <FileText className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          )}
          <Button 
            size="lg"
            className={personal.cvUrl ? "" : "gradient-primary hover:opacity-90 transition-opacity shadow-soft"}
            variant={personal.cvUrl ? "outline" : undefined}
            onClick={() => scrollToSection('contact')}
          >
            Get in Touch
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('experience')}
          >
            View Experience
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
