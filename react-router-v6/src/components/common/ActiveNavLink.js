import { NavLink } from "react-router-dom";
function activeClassName(disable) {
  return ({ isActive }) => (disable ? "" : isActive ? "active-link" : "");
}
export default function ActiveNavLink(props) {
  return (
    <>
      <NavLink className={activeClassName(props.disable)} {...props}>
        {props.text}
      </NavLink>
    </>
  );
}
