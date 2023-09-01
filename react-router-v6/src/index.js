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
import {
  getVanById as VanByIdLoader,
  getAllHostVans as HostVansLoader,
  getHostVanById as HostVanByIdLoader,
} from "./api/vans";
import { loader as VansLoader } from "./components/VanDetails";
import VanDetails from "./components/VanDetails";
import HostLayout from "./components/host/HostLayout";
import Dashboard from "./components/host/Dashboard";
import Income from "./components/host/Income";
import HostVans from "./components/host/HostVans";
import HostVanLayout from "./components/host/HostVanLayout";
import HostVanDetails from "./components/host/HostVanDetails";
import HostVanPhotos from "./components/host/HostVanPhotos";
import HostVanPricing from "./components/host/HostVanPricing";
import Reviews from "./components/host/Reviews";
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";
import Login from "./pages/Login";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route
        path="about"
        element={<About />}
        loader={async () => {
          console.log("about loader");
          return null;
        }}
      />
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={VansLoader}
      />
      <Route path="vans/:id" element={<VanDetails />} loader={VanByIdLoader} />
      <Route
        path="host"
        element={<HostLayout />}
        errorElement={<Error />}
        loader={HostVansLoader}
      >
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="vans" element={<HostVans />} />
        <Route
          path="vans/:id"
          element={<HostVanLayout />}
          loader={HostVanByIdLoader}
        >
          <Route index element={<HostVanDetails />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
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
