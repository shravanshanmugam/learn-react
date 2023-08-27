import { useOutletContext } from "react-router-dom";

export default function Dashboard() {
  console.log("render Dashboard");
  const hostVans = useOutletContext();
  return (
    <>
      <h2>Dashboard goes here</h2>
    </>
  );
}
