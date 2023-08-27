import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVanDetails() {
  console.log("render HostVanDetails");
  const hostVan = useOutletContext();
  return (
    <div className="host-van-details-container">
      <HostVanInfo name="Name" value={hostVan.name} />
      <HostVanInfo name="Category" value={hostVan.type} />
      <HostVanInfo name="Description" value={hostVan.description} />
      <HostVanInfo name="Visibility" value="Public" />
    </div>
  );
}

function HostVanInfo(props) {
  return (
    <>
      <h2 className="host-van-details">
        {props.name}: <small class="small-text">{props.value}</small>
      </h2>
    </>
  );
}

export default HostVanDetails;
