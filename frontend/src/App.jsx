import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Datasets from "./pages/Datasets";
import Experiments from "./pages/Experiments";
import Models from "./pages/Models";
import Analytics from "./pages/Analytics";
import Reports from "./pages/Reports";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/datasets" element={<Datasets />} />
      <Route path="/experiments" element={<Experiments />} />
      <Route path="/models" element={<Models />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;