import { Navigate, Outlet, useLoaderData } from "react-router-dom";
import ActiveNavLink from "../common/ActiveNavLink";

export default function HostLayout() {
  console.log("render HostLayout");
  const hostVans = useLoaderData();
  const loggedIn = false;
  if (!loggedIn) {
    return (
      <Navigate to="/login" state={{ message: "You must log-in first" }} />
    );
  }
  return (
    <>
      <nav className="host-nav">
        <ActiveNavLink to="." text="Dashboard" end />
        <ActiveNavLink to="income" text="Income" />
        <ActiveNavLink to="vans" text="Vans" />
        <ActiveNavLink to="reviews" text="Reviews" />
      </nav>
      <main className="host-outlet-container">
        <Outlet context={hostVans} />
      </main>
    </>
  );
}
