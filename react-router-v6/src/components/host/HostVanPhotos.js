import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVanPhotos() {
  console.log("render HostVanPhotos");
  const hostVan = useOutletContext();
  return (
    <>
      <img src={hostVan.imageUrl} alt={hostVan.name} width="100" />
    </>
  );
}

export default HostVanPhotos;
