import { NavLink } from "react-router-dom";
function activeClassName() {
  return ({ isActive }) => (isActive ? "active-link" : "");
}
export default function ActiveNavLink(props) {
  return (
    <>
      <NavLink to={props.to} className={activeClassName()} end={props.end}>
        {props.text}
      </NavLink>
    </>
  );
}
