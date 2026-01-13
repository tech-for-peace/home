import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./Index";
import Projects from "./pages/Projects";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);

export default App;
