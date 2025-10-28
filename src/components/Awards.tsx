import { Award, Trophy, GraduationCap, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cvData } from "@/data/cvData";
import { trackAwardClick } from "@/lib/analytics";

const Awards = () => {
  const categoryIcons = {
    competition: Trophy,
    scholarship: GraduationCap,
    certification: Award,
    recognition: Star,
  };

  const categoryColors = {
    competition: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    scholarship: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    certification: "bg-green-500/10 text-green-600 border-green-500/20",
    recognition: "bg-purple-500/10 text-purple-600 border-purple-500/20",
  };

  return (
    <section id="awards" className="py-20 px-4 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-10 h-10 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Awards & Achievements
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition of excellence in academics, competitions, and professional development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cvData.awards.map((award, index) => {
            const IconComponent = award.category 
              ? categoryIcons[award.category] 
              : Award;
            
            const CardContent = (
              <>
                {/* Certificate Image Preview */}
                <div className="relative h-48 bg-muted overflow-hidden">
                  <img 
                    src={award.image || "/placeholder.svg"} 
                    alt={award.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Award Details */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-lg font-semibold text-foreground line-clamp-2 flex-1">
                      {award.title}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    {award.year && (
                      <p className="text-base text-primary font-medium">
                        {award.year}
                      </p>
                    )}
                    {award.category && (
                      <Badge 
                        variant="secondary"
                        className={`${categoryColors[award.category]} text-sm px-2 py-1`}
                      >
                        <IconComponent className="w-3 h-3 mr-1" />
                        {award.category.charAt(0).toUpperCase() + award.category.slice(1)}
                      </Badge>
                    )}
                  </div>
                </div>
              </>
            );
            
            return award.link ? (
              <a
                key={index}
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                onClick={() => trackAwardClick(award.title, award.link)}
              >
                <Card className="group overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 hover:translate-y-[-4px] cursor-pointer border-2 border-primary/20 hover:border-primary/40 bg-gradient-to-br from-white to-primary/5">
                  {CardContent}
                </Card>
              </a>
            ) : (
              <Card
                key={index}
                className="group overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 hover:translate-y-[-4px] border-2 border-primary/20 hover:border-primary/40 bg-gradient-to-br from-white to-primary/5"
              >
                {CardContent}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Awards;
