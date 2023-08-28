import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHero = ({ queryKey }) => {
  return axios.get(`http://localhost:4000/superheroes/${queryKey[1]}`);
};

export default function useSuperHeroData(id) {
  // pass queryKey as array with name and id as value
  return useQuery(["super-hero", id], fetchSuperHero, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    select: (data) => data?.data,
  });
}
