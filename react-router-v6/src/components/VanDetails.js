import React from "react";
import { redirect, useLoaderData, useLocation } from "react-router-dom";
import ActiveNavLink from "./common/ActiveNavLink";
import { getAllVans } from "../api/vans";

export const loader = () => {
  console.log("getAllVans loader");
  const loggedIn = false;
  if (!loggedIn) {
    throw redirect("/login");
  }
  return getAllVans();
};

function VanDetails() {
  console.log("render VanDetails");
  const van = useLoaderData()[0];
  const location = useLocation();
  const path = location.state?.search || "";
  const type = location.state?.type || "all";
  return (
    <>
      &larr;{" "}
      <ActiveNavLink
        to={`..${path}`}
        relative="path"
        className="go-back"
        disable
      >
        Back to {type} vans
      </ActiveNavLink>
      <div className="van-card">
        <img src={van.imageUrl} alt={van.name} width="400" />
        <button className={`selected ${van.type}`}>{van.type}</button>
        <h2>{van.name}</h2>
        <h3>${van.price}/day</h3>
        <p>{van.description}</p>
      </div>
    </>
  );
}

export default VanDetails;
