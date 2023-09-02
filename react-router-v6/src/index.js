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
import Weather, { loader as weatherLoader } from "./pages/Weather";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";
import Login, { loader as loginLoader } from "./pages/Login";
import FormLogin, {
  loader as formLoginLoader,
  action as formLoginAction,
} from "./pages/FormLogin";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />}>
      <Route index element={<Home />} />
      <Route
        path="login"
        element={<FormLogin />}
        loader={formLoginLoader}
        action={formLoginAction}
      />
      <Route path="weather" element={<Weather />} loader={weatherLoader} />
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
        loader={async () => {
          const rand = Math.random() * 2;
          setTimeout(() => {
            console.log("host layout loader");
          }, rand);
          return HostVansLoader();
        }}
      >
        <Route
          index
          element={<Dashboard />}
          loader={async () => {
            const rand = Math.random() * 2;
            setTimeout(() => {
              console.log("host dashboard loader");
            }, rand);
            return null;
          }}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async () => {
            const rand = Math.random() * 2;
            setTimeout(() => {
              console.log("host income loader");
            }, rand);
            return null;
          }}
        />
        <Route
          path="vans"
          element={<HostVans />}
          loader={async () => {
            const rand = Math.random() * 2;
            setTimeout(() => {
              console.log("host vans loader");
            }, rand);
            return null;
          }}
        />
        <Route
          path="vans/:id"
          element={<HostVanLayout />}
          loader={HostVanByIdLoader}
        >
          <Route index element={<HostVanDetails />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async () => {
            const rand = Math.random() * 2;
            setTimeout(() => {
              console.log("host reviews loader");
            }, rand);
            return null;
          }}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
