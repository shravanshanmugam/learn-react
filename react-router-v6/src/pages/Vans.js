import { useLoaderData, useSearchParams } from "react-router-dom";
import HostVanCard from "../components/host/HostVanCard";
import ActiveNavLink from "../components/common/ActiveNavLink";

export default function Vans() {
  console.log("render Vans");
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("search params", searchParams.toString());
  const type = searchParams.get("type") || "";
  console.log("type", type);
  var vans = useLoaderData();
  vans = type ? vans.filter((van) => van.type === type) : vans;
  const vansElement = vans.map((van) => (
    <HostVanCard key={van.name} {...van} />
  ));
  return (
    <>
      <h2>Explore our van options</h2>
      <nav>
        <ActiveNavLink
          to="?type=simple"
          text="Simple"
          state={{ search: searchParams.toString(), type }}
        />
        <ActiveNavLink
          to="?type=rugged"
          text="Rugged"
          state={{ search: searchParams.toString(), type }}
        />
        <ActiveNavLink
          to="?type=luxury"
          text="Luxury"
          state={{ search: searchParams.toString(), type }}
        />
        <ActiveNavLink to="." text="Clear all filters" end />
      </nav>
      <div className="host-vans-container">{vansElement}</div>
    </>
  );
}
