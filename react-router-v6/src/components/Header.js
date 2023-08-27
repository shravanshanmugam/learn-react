import { Link } from "react-router-dom";
import ActiveNavLink from "./common/ActiveNavLink";
export default function Header() {
  console.log("render Header");
  return (
    <>
      <header>
        <h2>
          <Link to="/">Home</Link>
        </h2>
        <nav>
          <ActiveNavLink to="host" text="Host" end />
          <ActiveNavLink to="about" text="About" />
          <ActiveNavLink to="vans" text="Vans" />
        </nav>
      </header>
    </>
  );
}
