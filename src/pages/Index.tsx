import { ExternalLink, Heart } from "lucide-react";

const projects = [
  {
    href: "https://disha.techforpeace.co.in",
    image: "/disha-preview.jpg",
    alt: "Disha - Video discovery platform",
    title: "Disha",
    description:
      "Discover 2000+ videos from Timeless Today, YouTube, and Spotify.",
  },
  {
    href: "https://clipstream.techforpeace.co.in",
    image: "/clipstream-preview.jpg",
    alt: "ClipStream - Video streaming platform",
    title: "ClipStream",
    description:
      "Fast video clipping in your browser. No data sent to any server.",
  },
  {
    href: "https://umang.techforpeace.co.in",
    image: "/umang-preview.jpg",
    alt: "Umang - Framed profile photo generator",
    title: "Umang",
    description:
      "Upload your photo and get four framed DP versions to download or share.",
  },
] as const;

const ProjectCard = ({
  href,
  image,
  alt,
  title,
  description,
}: (typeof projects)[number]) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group block w-full rounded-xl bg-card border border-border/60 hover:border-peace-purple/40 transition-all duration-300 overflow-hidden peaceful-glow hover:scale-[1.02] sm:last:col-span-2 sm:last:max-w-md sm:last:justify-self-center lg:last:col-span-1 lg:last:max-w-none lg:last:justify-self-stretch"
  >
    <div className="aspect-video overflow-hidden">
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-4 sm:p-5">
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-peace-purple transition-colors">
          {title}
        </h2>
        <ExternalLink className="w-3.5 h-3.5 shrink-0 text-muted-foreground group-hover:text-peace-purple transition-colors" />
      </div>
      <p className="text-sm sm:text-base text-muted-foreground">{description}</p>
    </div>
  </a>
);

const Index = () => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "var(--gradient-peaceful-bg)" }}
    >
      <main className="flex-1 px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center fade-in mb-10 sm:mb-12 md:mb-16 max-w-2xl mx-auto">
            <div className="inline-block mb-2">
              <img
                src="/logo.png"
                alt="Tech for Peace Logo"
                className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 mx-auto object-contain rounded-full bg-card peaceful-glow float-animation"
              />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 gradient-text">
              Tech for Peace
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto px-1">
              We are volunteers passionate about using technology to share the
              message of peace from{" "}
              <a
                href="https://premrawat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-foreground hover:text-peace-purple transition-colors underline decoration-peace-purple/30 hover:decoration-peace-purple"
              >
                Prem Rawat
              </a>
              .
            </p>
          </div>

          {/* Project Cards */}
          <div
            className="fade-in grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            style={{ animationDelay: "0.2s" }}
          >
            {projects.map((project) => (
              <ProjectCard key={project.href} {...project} />
            ))}
          </div>
        </div>
      </main>

      <footer className="px-4 py-6 text-center">
        <p className="text-sm text-muted-foreground flex flex-wrap items-center justify-center gap-1.5">
          Made with{" "}
          <Heart className="w-3.5 h-3.5 text-peace-purple fill-peace-purple" />{" "}
          by techforpeace.co.in
        </p>
      </footer>
    </div>
  );
};

export default Index;
