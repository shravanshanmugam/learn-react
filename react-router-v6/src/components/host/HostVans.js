import { useOutletContext } from "react-router-dom";
import HostVanCard from "./HostVanCard";

export default function HostVans() {
  console.log("render HostVans");
  const hostVans = useOutletContext();
  const hostVansElement = hostVans.map((hostVan) => (
    <HostVanCard key={hostVan.name} {...hostVan} />
  ));
  return (
    <>
      <h2>Your listed vans</h2>
      {hostVansElement}
    </>
  );
}
