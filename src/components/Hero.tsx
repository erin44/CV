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
      {/* SVG wave at bottom */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,100 C240,160 480,40 720,100 C960,160 1200,40 1440,100 L1440,200 L0,200 Z"
            fill="hsl(215 65% 35% / 0.06)"
          />
          <path
            d="M0,130 C360,80 720,170 1080,120 C1260,95 1380,140 1440,150 L1440,200 L0,200 Z"
            fill="hsl(215 65% 35% / 0.04)"
          />
        </svg>
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
