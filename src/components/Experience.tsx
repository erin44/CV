import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cvData } from "@/data/cvData";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Experience
          </h2>
        </div>

        <div className="space-y-6">
          {cvData.experience.map((exp, index) => (
            <Card 
              key={index}
              className="p-6 shadow-card hover:shadow-soft transition-all duration-300 hover:translate-y-[-2px]"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-primary font-medium">{exp.company}</p>
                  <p className="text-base text-muted-foreground">{exp.location}</p>
                </div>
                <span className="text-base font-medium text-muted-foreground whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              
              <ul className="space-y-3 pl-0">
                {exp.description.map((item, idx) => (
                  <li 
                    key={idx}
                    className="text-base text-muted-foreground flex gap-3"
                  >
                    <span className="text-primary font-bold shrink-0">•</span>
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
