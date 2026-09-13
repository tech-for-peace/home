import { createRoot } from "react-dom/client";
import Index from "./pages/Index";
import "./index.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

createRoot(root).render(<Index />);
