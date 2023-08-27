import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import ActiveNavLink from "../common/ActiveNavLink";

export default function HostVanLayout() {
  console.log("render HostVanLayout");
  const hostVan = useLoaderData()[0];
  return (
    <div className="host-van-info-container">
      <ActiveNavLink to=".." relative="path" text="Back to all vans" disable />
      {hostVan && (
        <>
          <div className="host-van-info">
            <figure>
              <img src={hostVan.imageUrl} alt={hostVan.name} width="200" />
              <figcaption>
                <p className="host-van-name">{hostVan.name}</p>
                <p className="host-van-price">${hostVan.price}/day</p>
              </figcaption>
            </figure>
          </div>
          <nav>
            <ActiveNavLink to="." text="Details" end />
            <ActiveNavLink to="pricing" text="Pricing" />
            <ActiveNavLink to="photos" text="Photos" />
          </nav>
          <main>
            <Outlet context={hostVan} />
          </main>
        </>
      )}
    </div>
  );
}
