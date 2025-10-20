import { Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cvData } from "@/data/cvData";

const VoluntaryWork = () => {
  return (
    <section id="voluntary" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Heart className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Voluntary Work
          </h2>
        </div>

        <div className="space-y-6">
          {cvData.voluntaryWork.map((work, index) => (
            <Card 
              key={index}
              className="p-6 shadow-card hover:shadow-soft transition-all duration-300 hover:translate-y-[-2px]"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                {work.title}
              </h3>
              <p className="text-lg text-primary font-medium mb-3">{work.organization}</p>
              <p className="text-base text-muted-foreground">{work.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoluntaryWork;
