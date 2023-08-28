import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { PageLayout } from "./components/PageLayout";
import { SuperHeroesPage } from "./pages/SuperHeroesPage";
import { RQSuperHeroesPage } from "./pages/RQSuperHeroesPage";
import { HomePage } from "./pages/HomePage";
import RQSuperHeroPage from "./pages/RQSuperHeroPage";
import RQParallelPage from "./pages/RQParallelPage";
import RQDynamicParallelPage from "./pages/RQDynamicParallelPage";
import RQDependentQueriesPage from "./pages/RQDependentQueriesPage";
import "./index.css";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<HomePage />} />
            <Route path="super-heroes" element={<SuperHeroesPage />} />
            <Route path="rq-super-heroes" element={<RQSuperHeroesPage />} />
            <Route path="rq-super-heroes/:id" element={<RQSuperHeroPage />} />
            <Route path="rq-parallel" element={<RQParallelPage />} />
            <Route
              path="rq-dynamic-parallel"
              element={<RQDynamicParallelPage ids={[1, 3]} />}
            />
            <Route path="rq-dependent" element={<RQDependentQueriesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
