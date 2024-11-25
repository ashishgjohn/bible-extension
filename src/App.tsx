import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import VersePage from "./pages/VersePage";
import Settings from "./pages/Settings";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/verse/:score" element={<VersePage />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  );
}

export default App;