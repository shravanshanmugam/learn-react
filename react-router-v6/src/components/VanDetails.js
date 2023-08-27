import React from "react";
import { useLocation, useParams } from "react-router-dom";
import ActiveNavLink from "./common/ActiveNavLink";
import { getVanById } from "../api/vans";

function VanDetails() {
  console.log("render VanDetails");
  const params = useParams();
  const [van, setVan] = React.useState({});
  React.useEffect(() => {
    getVanById(params.id)
      .then((data) => data[0])
      .then((data) => setVan(data))
      .catch((e) => console.error(e));
  }, [params.id]);
  const location = useLocation();
  const path = location.state?.search || "";
  const type = location.state?.type || "all";
  return (
    <>
      <ActiveNavLink
        to={`..${path}`}
        relative="path"
        text={`Back to ${type} vans`}
      />
      <div className="van-card">
        <img src={van.imageUrl} alt={van.name} width="400" />
        <p>Name: {van.name}</p>
        <p>Description: {van.description}</p>
        <p>Price: ${van.price}/day</p>
        <p>Type: {van.type}</p>
      </div>
    </>
  );
}

export default VanDetails;
