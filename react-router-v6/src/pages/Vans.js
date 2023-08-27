import { useLoaderData, useSearchParams, Link } from "react-router-dom";
import ActiveNavLink from "../components/common/ActiveNavLink";

export default function Vans() {
  console.log("render Vans");
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type") || "";
  var vans = useLoaderData();
  vans = type ? vans.filter((van) => van.type === type) : vans;
  const vansElement = vans.map((van) => <VanCard key={van.name} {...van} />);
  return (
    <>
      <h2>Explore our van options</h2>
      <nav>
        <ActiveNavLink to="?type=simple" text="Simple" />
        <ActiveNavLink to="?type=rugged" text="Rugged" />
        <ActiveNavLink to="?type=luxury" text="Luxury" />
        {type && <ActiveNavLink to="." text="Clear all filters" end />}
      </nav>
      <div className="host-vans-container">{vansElement}</div>
    </>
  );
}

function VanCard(props) {
  console.log("render VanCard");
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type");
  return (
    <Link to={props.id} state={{ search: `?${searchParams.toString()}`, type }}>
      <section key={props.name} className="van-card">
        <figure>
          <img src={props.imageUrl} alt={props.name} width="150" />
          <figcaption>
            <p>{props.name}</p>
            <p>${props.price}/day</p>
          </figcaption>
        </figure>
      </section>
    </Link>
  );
}
