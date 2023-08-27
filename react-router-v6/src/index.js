import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import PageLayout from "./components/PageLayout";
import { loader as HostVansLoader } from "./components/host/HostLayout";
import HostLayout from "./components/host/HostLayout";
import Dashboard from "./components/host/Dashboard";
import Income from "./components/host/Income";
import HostVans from "./components/host/HostVans";
import Reviews from "./components/host/Reviews";
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} />
      <Route
        path="host"
        element={<HostLayout />}
        errorElement={<Error />}
        loader={HostVansLoader}
      >
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="vans" element={<HostVans />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
