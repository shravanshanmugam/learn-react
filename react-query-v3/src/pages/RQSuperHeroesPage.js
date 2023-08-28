import React from "react";
import { Link } from "react-router-dom";
import useSuperHeroesData from "../hooks/useSuperHeroesData";

export const RQSuperHeroesPage = () => {
  console.log("render RQSuperHeroesPage");
  const [myRefreshInterval, setMyRefreshInterval] = React.useState(3000);
  const onSuccess = (data) => {
    console.log("run side effect after API success response", data);
    if (data.length === 4) setMyRefreshInterval(false);
  };
  const onError = (error) => {
    console.log("run side effect after API error response", error);
    setMyRefreshInterval(false);
  };
  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(myRefreshInterval, onSuccess, onError);

  console.log({ isLoading, isFetching });
  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      {/* {data?.map((heroName) => {
        return <div key={heroName}>{heroName}</div>;
      })} */}
      <nav className="super-heroes">
        {data?.map((hero) => {
          return (
            <Link to={`/rq-super-heroes/${hero.id}`} key={hero.id}>
              <h3>{hero.name}</h3>
            </Link>
          );
        })}
      </nav>
      <button onClick={refetch}>Fetch Super Heroes!</button>
    </>
  );
};
