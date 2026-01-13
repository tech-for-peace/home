import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../button";

import dishaPreview from "../assets/disha-preview.jpg";

interface Project {
  name: string;
  description: string;
  url: string;
  image?: string;
}

const projects: Project[] = [
  {
    name: "Disha",
    description: "A platform to guide and support individuals on their journey towards inner peace.",
    url: "https://disha.techforpeace.co.in",
    image: dishaPreview,
  },
];

const Projects = () => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "var(--gradient-peaceful-bg)" }}
    >
      <header className="px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 px-4 py-8">
        <div className="max-w-4xl mx-auto fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text text-center">
            Our Projects
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Tools and platforms we've built to spread the message of peace.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-peace-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-peace-purple/10 overflow-hidden"
              >
                {project.image && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h2 className="text-lg font-semibold text-foreground group-hover:text-peace-purple transition-colors">
                      {project.name}
                    </h2>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-peace-purple transition-colors" />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} techforpeace.co.in — Made with ❤️ for peace
        </p>
      </footer>
    </div>
  );
};

export default Projects;
