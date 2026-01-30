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
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "var(--gradient-peaceful-bg)" }}
    >
      <main className="flex-1 px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center fade-in mb-16">
            <div className="mb-8 float-animation">
              <img
                src="/logo.png"
                alt="Tech for Peace Logo"
                className="w-40 h-40 md:w-52 md:h-52 mx-auto object-contain peaceful-glow rounded-full bg-card p-4"
              />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
              Tech for Peace
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We are a group of volunteers passionate about using technology to
              spread the message of peace from{" "}
              <a
                href="https://premrawat.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-semibold text-foreground">Prem Rawat</span>
              </a>
              .
            </p>
          </div>

          {/* Projects Section */}
          <div className="fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-text text-center">
              Our Projects
            </h2>
            <p className="text-muted-foreground text-center mb-8">
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
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-peace-purple transition-colors">
                        {project.name}
                      </h3>
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
        </div>
      </main>

      <footer className="py-6 text-center text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} techforpeace.co.in — Made with ❤️ for
          peace
        </p>
      </footer>
    </div>
  );
};

export default Index;
