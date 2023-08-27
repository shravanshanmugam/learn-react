import { Outlet } from "react-router-dom";
import ActiveNavLink from "../common/ActiveNavLink";
export default function HostLayout() {
  console.log("render HostLayout");
  return (
    <>
      <nav>
        <ActiveNavLink to="." text="Dashboard" end />
        <ActiveNavLink to="income" text="Income" />
        <ActiveNavLink to="vans" text="Vans" />
        <ActiveNavLink to="reviews" text="Reviews" />
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
