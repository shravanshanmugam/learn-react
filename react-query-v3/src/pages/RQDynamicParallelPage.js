import React from "react";
import axios from "axios";
import { useQueries } from "react-query";

const fetchSuperHero = (id) => {
  return axios.get(`http://localhost:4000/superheroes/${id}`);
};

function RQDynamicParallelPage({ ids }) {
  console.log("render RQDynamicParallelPage");
  const queryResults = useQueries(
    ids.map((id) => {
      return {
        queryKey: ["super-heroes", id],
        queryFn: () => fetchSuperHero(id),
        select: (data) => data.data,
      };
    })
  );
  const hero1 = queryResults[0]?.data;
  const hero2 = queryResults[1]?.data;
  return (
    <>
      <h2>Super heroes</h2>
      <SuperHeroDetails {...hero1} />
      <SuperHeroDetails {...hero2} />
    </>
  );
}

export default RQDynamicParallelPage;

function SuperHeroDetails(props) {
  return (
    <>
      <h2>
        Name: <small>{props.name}</small>
      </h2>
      <h2>
        Alter ego: <small>{props.alterEgo}</small>
      </h2>
    </>
  );
}
