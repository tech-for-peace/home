import { ExternalLink, Heart } from "lucide-react";
import dishaPreview from "../assets/disha-preview.jpg";
import clipstreamPreview from "../assets/clipstream-preview.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--gradient-peaceful-bg)" }}>
      <main className="flex-1 px-6 py-8 md:py-12">
        <div className="max-w-2xl mx-auto">
          {/* Hero Section */}
          <div className="text-center fade-in mb-16">
            <div className="inline-block mb-2">
              <img
                src="/logo.png"
                alt="Tech for Peace Logo"
                className="w-36 h-36 md:w-44 md:h-44 mx-auto object-contain rounded-full bg-card peaceful-glow float-animation"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Tech for Peace
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto">
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
          <div className="fade-in flex flex-wrap justify-center gap-6" style={{ animationDelay: "0.2s" }}>
            <a
              href="https://disha.techforpeace.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group block max-w-xs rounded-xl bg-card border border-border/60 hover:border-peace-purple/40 transition-all duration-300 overflow-hidden peaceful-glow hover:scale-[1.02]"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={dishaPreview}
                  alt="Disha - Video discovery platform"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <h2 className="text-lg font-semibold text-foreground group-hover:text-peace-purple transition-colors">
                    Disha
                  </h2>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-peace-purple transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Discover 2000+ videos from Timeless Today, YouTube, and Spotify.
                </p>
              </div>
            </a>

            <a
              href="https://clipstream.techforpeace.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group block max-w-xs rounded-xl bg-card border border-border/60 hover:border-peace-purple/40 transition-all duration-300 overflow-hidden peaceful-glow hover:scale-[1.02]"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={clipstreamPreview}
                  alt="ClipStream - Video streaming platform"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <h2 className="text-lg font-semibold text-foreground group-hover:text-peace-purple transition-colors">
                    ClipStream
                  </h2>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-peace-purple transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Extract and trim video clips in your browser—no uploads needed.
                </p>
              </div>
            </a>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center">
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1.5">
          Made with <Heart className="w-3.5 h-3.5 text-peace-purple fill-peace-purple" /> by techforpeace.co.in
        </p>
      </footer>
    </div>
  );
};

export default Index;
