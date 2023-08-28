import React from "react";
import { useParams, Link } from "react-router-dom";
import useSuperHeroData from "../hooks/useSuperHeroData";

function RQSuperHeroPage() {
  const params = useParams();
  const { isLoading, data, isError, error, isFetching } = useSuperHeroData(
    params.id
  );
  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h2>
        Name: <small>{data.name}</small>
      </h2>
      <h2>
        Alter ego: <small>{data.alterEgo}</small>
      </h2>
      <Link to=".." relative="path">
        <button>Go back</button>
      </Link>
    </>
  );
}

export default RQSuperHeroPage;
