import { useOutletContext } from "react-router-dom";
export default function HostVanPricing() {
  console.log("render HostVanPricing");
  const hostVan = useOutletContext();
  return <h2>Price: ${hostVan.price}/day</h2>;
}
