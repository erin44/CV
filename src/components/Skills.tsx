import { Sparkles, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cvData } from "@/data/cvData";

const Skills = () => {
  const renderStars = (level: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= level
                ? "fill-primary text-primary"
                : "fill-muted text-muted"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Sparkles className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Skills
          </h2>
        </div>

        <Card className="p-8 shadow-card">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-8">
                Technical Skills
              </h3>
              <div className="space-y-6">
                {cvData.technicalSkills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold text-primary mb-3">
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, idx) => (
                        <Badge 
                          key={idx}
                          variant="secondary"
                          className="px-4 py-2 text-base hover:shadow-soft transition-all duration-300 hover:translate-y-[-2px]"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills & Languages */}
            <div className="space-y-8">
              {/* Soft Skills */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-8">
                  Soft Skills
                </h3>
                <div className="space-y-6">
                  {cvData.softSkills.map((skillGroup, index) => (
                    <div key={index}>
                      <h4 className="text-lg font-semibold text-primary mb-3">
                        {skillGroup.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, idx) => (
                          <Badge 
                            key={idx}
                            variant="outline"
                            className="px-4 py-2 text-base hover:shadow-soft transition-all duration-300 hover:translate-y-[-2px]"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-8">
                  Languages
                </h3>
                <div className="space-y-4">
                  {cvData.languages.map((language, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <span className="text-base text-foreground font-medium min-w-[100px]">
                        {language.name}
                      </span>
                      <div className="flex items-center gap-6">
                        {renderStars(language.level)}
                        <span className="text-sm text-muted-foreground">
                          {language.proficiency}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
