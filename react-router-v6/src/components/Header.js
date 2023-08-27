import { Link } from "react-router-dom";
import ActiveNavLink from "./common/ActiveNavLink";
export default function Header() {
  console.log("render Header");
  return (
    <>
      <header>
        <h2 className="header-home">
          <Link to="/">#VANLIFE</Link>
        </h2>
        <nav className="header-nav">
          <ActiveNavLink to="host" text="Host" end />
          <ActiveNavLink to="about" text="About" />
          <ActiveNavLink to="vans" text="Vans" />
        </nav>
      </header>
    </>
  );
}
