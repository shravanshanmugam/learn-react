import React from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import ActiveNavLink from "./common/ActiveNavLink";

function VanDetails() {
  console.log("render VanDetails");
  const van = useLoaderData()[0];
  const location = useLocation();
  const path = location.state?.search || "";
  const type = location.state?.type || "all";
  return (
    <>
      <ActiveNavLink
        to={`..${path}`}
        relative="path"
        text={`Back to ${type} vans`}
        disable
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
