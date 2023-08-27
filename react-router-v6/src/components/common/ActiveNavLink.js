import { NavLink } from "react-router-dom";
function activeClassName() {
  return ({ isActive }) => (isActive ? "active-link" : "");
}
export default function ActiveNavLink(props) {
  return (
    <>
      <NavLink className={activeClassName()} state={props.state} {...props}>
        {props.text}
      </NavLink>
    </>
  );
}
