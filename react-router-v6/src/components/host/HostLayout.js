import { Outlet, useLoaderData } from "react-router-dom";
import ActiveNavLink from "../common/ActiveNavLink";

export async function loader() {
  console.log("load host vans data");
  const response = await fetch("http://localhost:8080/api/host/vans");
  console.log("host vans response", response);
  const data = await response.json();
  if (!response.ok) {
    return {
      message: "Something went wrong",
      status: response.status,
      statusText: response.statusText,
    };
  }
  return data;
}

export default function HostLayout() {
  console.log("render HostLayout");
  const hostVans = useLoaderData();
  return (
    <>
      <nav>
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
