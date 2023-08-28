import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};
function RQParallelPage() {
  const { data: superHeroes } = useQuery("super-heroes", fetchSuperHeroes, {
    select: (data) => data?.data,
  });
  const { data: friends } = useQuery("friends", fetchFriends, {
    select: (data) => data?.data,
  });
  return (
    <>
      <h2>Super heroes</h2>
      {superHeroes && superHeroes.map((superHero) => <p>{superHero.name}</p>)}
      <h2>Friends</h2>
      {friends && friends.map((friend) => <p>{friend.name}</p>)}
    </>
  );
}

export default RQParallelPage;
