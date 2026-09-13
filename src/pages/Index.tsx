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
  {
    href: "https://m.techforpeace.co.in",
    image: "/m-preview.jpg",
    alt: "M - Meditation timekeeper",
    title: "M",
    description:
      "Keep track of time during meditation. A quiet 60-minute clock with a chime every 15 minutes.",
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
    className="peaceful-glow group block w-full overflow-hidden rounded-xl border border-border/60 bg-card transition-all duration-300 hover:scale-[1.02] hover:border-peace-purple/40"
  >
    <div className="aspect-video overflow-hidden">
      <img
        src={image}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-4 sm:p-5">
      <div className="mb-1 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground transition-colors group-hover:text-peace-purple sm:text-xl">
          {title}
        </h2>
        <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-peace-purple" />
      </div>
      <p className="text-sm text-muted-foreground sm:text-base">
        {description}
      </p>
    </div>
  </a>
);

const Index = () => (
  <div
    className="flex min-h-screen flex-col"
    style={{ background: "var(--gradient-peaceful-bg)" }}
  >
    <main className="flex-1 px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="fade-in mx-auto mb-10 max-w-2xl text-center sm:mb-12 md:mb-16">
          <div className="mb-2 inline-block">
            <img
              src="/logo.png"
              alt="Tech for Peace Logo"
              className="float-animation peaceful-glow mx-auto h-28 w-28 rounded-full bg-card object-contain sm:h-36 sm:w-36 md:h-44 md:w-44"
            />
          </div>

          <h1 className="gradient-text mb-4 text-3xl font-bold sm:mb-6 sm:text-4xl md:text-5xl">
            Tech for Peace
          </h1>

          <p className="mx-auto max-w-xl px-1 text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
            We are volunteers passionate about using technology to share the
            message of peace from{" "}
            <a
              href="https://premrawat.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground underline decoration-peace-purple/30 transition-colors hover:text-peace-purple hover:decoration-peace-purple"
            >
              Prem Rawat
            </a>
            .
          </p>
        </div>

        <div
          className="fade-in grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
          style={{ animationDelay: "0.2s" }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.href} {...project} />
          ))}
        </div>
      </div>
    </main>

    <footer className="px-4 py-6 text-center">
      <p className="flex flex-wrap items-center justify-center gap-1.5 text-sm text-muted-foreground">
        Made with{" "}
        <Heart className="h-3.5 w-3.5 fill-peace-purple text-peace-purple" /> by
        techforpeace.co.in
      </p>
    </footer>
  </div>
);

export default Index;
