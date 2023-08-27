import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import ActiveNavLink from "../common/ActiveNavLink";

export default function HostVanLayout() {
  console.log("render HostVanLayout");
  const hostVan = useLoaderData()[0];
  return (
    <>
      &larr;
      <ActiveNavLink to=".." relative="path" className="go-back" disable>
        Back to all vans
      </ActiveNavLink>
      <div className="host-van-info-container">
        {hostVan && (
          <>
            <div className="host-van-info">
              <figure className="host-van-info-figure">
                <img src={hostVan.imageUrl} alt={hostVan.name} width="200" />
                <figcaption>
                  <button className={`selected ${hostVan.type}`}>
                    {hostVan.type}
                  </button>
                  <h2 className="host-van-name">{hostVan.name}</h2>
                  <h3 className="host-van-price">${hostVan.price}/day</h3>
                </figcaption>
              </figure>
            </div>
            <nav className="host-van-info-nav">
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
    </>
  );
}
