import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./components/PageLayout";
import HostLayout from "./components/host/HostLayout";
import Dashboard from "./components/host/Dashboard";
import Income from "./components/host/Income";
import HostVans from "./components/host/HostVans";
import Reviews from "./components/host/Reviews";
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import About from "./pages/About";
import Error from "./pages/Error";
import "./index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
