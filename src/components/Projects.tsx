import { FolderOpen, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cvData } from "@/data/cvData";
import { trackProjectClick } from "@/lib/analytics";

const Projects = () => {
  const getYouTubeEmbedUrl = (url: string) => {
    const videoIdMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?]+)/);
    return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : null;
  };

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <FolderOpen className="w-8 h-8 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cvData.projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 shadow-card hover:shadow-soft transition-all duration-300 hover:translate-y-[-2px] flex flex-col"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-semibold text-foreground">
                  {project.title}
                </h3>
                {project.date && (
                  <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                    {project.date}
                  </span>
                )}
              </div>

              {Array.isArray(project.description) ? (
                <ul className="space-y-2 mb-4">
                  {project.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary flex-shrink-0 leading-6">•</span>
                      <span className="text-base text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-base text-muted-foreground mb-4">
                  {project.description}
                </p>
              )}

              {project.videoUrl && getYouTubeEmbedUrl(project.videoUrl) && (
                <div className="mb-4 rounded-lg overflow-hidden bg-muted aspect-video border-2 border-border">
                  <iframe
                    src={getYouTubeEmbedUrl(project.videoUrl)!}
                    title={project.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              {project.image && !project.videoUrl && (
                <div className="mb-4 rounded-lg overflow-hidden bg-muted aspect-[3/4] flex items-center justify-center border-2 border-border">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="text-sm px-3 py-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              <Button
                asChild
                className="w-full group bg-primary text-primary-foreground hover:bg-primary/90 transition-all mt-auto shadow-md hover:shadow-lg"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                  onClick={() => trackProjectClick(project.title, project.link)}
                >
                  View Project
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-[-2px] transition-transform" />
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
