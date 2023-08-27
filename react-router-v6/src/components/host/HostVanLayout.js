import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { getHostVanById } from "../../api/vans";
import ActiveNavLink from "../common/ActiveNavLink";

export default function HostVanLayout() {
  console.log("render HostVanLayout");
  const params = useParams();
  console.log("params", params);
  const [hostVan, setHostVan] = React.useState({});
  React.useEffect(() => {
    getHostVanById(params.id)
      .then((data) => data[0])
      .then((data) => setHostVan(data))
      .catch((e) => console.error(e));
  }, []);
  return (
    <div className="host-van-info-container">
      <ActiveNavLink to=".." relative="path" text="Back to all vans" />
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
