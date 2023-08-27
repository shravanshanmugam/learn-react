import { NavLink } from "react-router-dom";
function activeClassName() {
  return ({ isActive }) => (isActive ? "active-link" : "");
}
export default function ActiveNavLink(props) {
  return (
    <>
      <NavLink className={activeClassName()} {...props}>
        {props.text}
      </NavLink>
    </>
  );
}
