import { GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cvData } from "@/data/cvData";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Education
          </h2>
        </div>

        <div className="space-y-6">
          {cvData.education.map((edu, index) => (
            <Card 
              key={index}
              className="p-6 shadow-card hover:shadow-soft transition-all duration-300 hover:translate-y-[-2px]"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-primary font-medium">{edu.institution}</p>
                  <p className="text-base text-muted-foreground">{edu.location}</p>
                </div>
                <span className="text-base font-medium text-muted-foreground whitespace-nowrap">
                  {edu.period}
                </span>
              </div>
              
              {edu.details && (
                <p className="text-base text-muted-foreground mt-3">
                  {edu.details}
                </p>
              )}
              
              {edu.coursework && edu.coursework.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-base font-semibold text-foreground mb-2">
                    Relevant Coursework:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {edu.coursework.map((course, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-primary">•</span>
                        <span className="text-base text-muted-foreground">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
