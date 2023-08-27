import { useRouteError } from "react-router-dom";

export default function Error() {
  console.log("render Error");
  const error = useRouteError();
  console.error("error", error);
  return (
    <>
      <h2>Error: {error.message}</h2>
      <pre>
        {error.status} - {error.statusText}
      </pre>
    </>
  );
}
