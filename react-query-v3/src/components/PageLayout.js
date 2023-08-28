import { Link, Outlet } from "react-router-dom";
export const PageLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to=".">Home</Link>
          </li>
          <li>
            <Link to="super-heroes">Traditional Super Heroes</Link>
          </li>
          <li>
            <Link to="rq-super-heroes">RQ Super Heroes</Link>
          </li>
          <li>
            <Link to="rq-parallel">RQ Parallel</Link>
          </li>
          <li>
            <Link to="rq-dynamic-parallel">RQ Dynamic Parallel</Link>
          </li>
          <li>
            <Link to="rq-dependent">RQ Dependent</Link>
          </li>
          <li>
            <Link to="rq-paginated">RQ Paginated</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
