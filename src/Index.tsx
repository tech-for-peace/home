import { MessageCircle } from "lucide-react";
import { Button } from "./button";
import logo from "./assets/logo.jpg";

const Index = () => {
  const handleFeedback = () => {
    window.open(
      "https://github.com/tech-for-peace/home/issues/new",
      "_blank"
    );
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "var(--gradient-peaceful-bg)" }}
    >
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl mx-auto text-center fade-in">
          <div className="mb-8 float-animation">
            <img
              src={logo}
              alt="Tech for Peace Logo"
              className="w-40 h-40 md:w-52 md:h-52 mx-auto object-contain peaceful-glow rounded-full bg-card p-4"
            />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            Tech for Peace
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
            We are a group of volunteers passionate about using technology
            to spread the message of peace from{" "}
            <span className="font-semibold text-foreground">Prem Rawat</span>.
          </p>

          <Button
            variant="peace"
            size="lg"
            onClick={handleFeedback}
            className="font-semibold"
          >
            <MessageCircle className="w-5 h-5" />
            Share Feedback
          </Button>
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

export default Index;
