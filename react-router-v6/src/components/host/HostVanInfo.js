import React from "react";
import { useParams } from "react-router-dom";
import { getHostVanById } from "../../api/hostVans";
import ActiveNavLink from "../common/ActiveNavLink";

export default function HostVanInfo() {
  console.log("render HostVan");
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
        <div className="host-van-info">
          <figure>
            <img src={hostVan.imageUrl} alt={hostVan.name} width="200" />
            <figcaption>
              <p className="host-van-name">{hostVan.name}</p>
              <p className="host-van-price">${hostVan.price}/day</p>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
