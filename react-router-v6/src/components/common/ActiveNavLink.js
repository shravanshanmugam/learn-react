import { NavLink } from "react-router-dom";
function activeClassName(disable) {
  return ({ isActive }) => (disable ? "" : isActive ? "active-link" : "");
}
export default function ActiveNavLink(props) {
  const text = props.text || props.children;
  return (
    <>
      <NavLink className={activeClassName(props.disable)} {...props}>
        {text}
      </NavLink>
    </>
  );
}
