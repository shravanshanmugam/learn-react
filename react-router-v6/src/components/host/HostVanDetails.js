import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVanDetails() {
  console.log("render HostVanDetails");
  const hostVan = useOutletContext();
  return (
    <>
      <HostVanInfo name="Name" value={hostVan.name} />
      <HostVanInfo name="Description" value={hostVan.description} />
    </>
  );
}

function HostVanInfo(props) {
  return (
    <>
      <h2>
        {props.name}: <small>{props.value}</small>
      </h2>
    </>
  );
}

export default HostVanDetails;
