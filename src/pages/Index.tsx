import { ExternalLink } from "lucide-react";
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
    description: "Discover videos from Timeless Today and Prem Rawat official YouTube",
    url: "https://disha.techforpeace.co.in",
    image: dishaPreview,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--gradient-peaceful-bg)" }}>
      <main className="flex-1 px-4 py-10">
        <div className="max-w-3xl mx-auto">
          {/* Hero Section */}
          <div className="text-center fade-in mb-10">
            <img
              src="/logo.png"
              alt="Tech for Peace Logo"
              className="w-28 h-28 md:w-36 md:h-36 mx-auto object-contain rounded-full bg-card p-3 mb-5"
            />

            <h1 className="text-3xl md:text-4xl font-bold mb-3 gradient-text">Tech for Peace</h1>

            <p className="text-base text-muted-foreground max-w-lg mx-auto">
              We are a group of volunteers passionate about using technology to spread the message of peace from{" "}
              <a
                href="https://premrawat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:text-peace-purple transition-colors"
              >
                Prem Rawat
              </a>
              .
            </p>
          </div>

          {/* Projects Section */}
          <div className="fade-in">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl bg-card/80 border border-border/50 hover:border-peace-purple/50 transition-all duration-200 overflow-hidden"
                >
                  {project.image && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-medium text-foreground group-hover:text-peace-purple transition-colors">
                        {project.name}
                      </h3>
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-peace-purple transition-colors" />
                    </div>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} techforpeace.co.in
      </footer>
    </div>
  );
};

export default Index;
