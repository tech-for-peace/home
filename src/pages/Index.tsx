import { ExternalLink, Heart } from "lucide-react";
import dishaPreview from "../assets/disha-preview.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--gradient-peaceful-bg)" }}>
      <main className="flex-1 px-6 py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          {/* Hero Section */}
          <div className="text-center fade-in mb-16">
            <div className="inline-block mb-8">
              <img
                src="/logo.png"
                alt="Tech for Peace Logo"
                className="w-24 h-24 md:w-32 md:h-32 mx-auto object-contain rounded-full bg-card peaceful-glow p-4 float-animation"
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

          {/* Project Card */}
          <div className="fade-in" style={{ animationDelay: "0.2s" }}>
            <a
              href="https://disha.techforpeace.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl bg-card border border-border/60 hover:border-peace-purple/40 transition-all duration-300 overflow-hidden peaceful-glow hover:scale-[1.02]"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={dishaPreview}
                  alt="Disha - Video discovery platform"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-semibold text-foreground group-hover:text-peace-purple transition-colors">
                    Disha
                  </h2>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-peace-purple transition-colors" />
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Discover videos from Timeless Today and Prem Rawat's official YouTube channels.
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
