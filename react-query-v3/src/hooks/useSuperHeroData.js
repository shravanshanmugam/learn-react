import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

const fetchSuperHero = ({ queryKey }) => {
  console.log(queryKey);
  return axios.get(`http://localhost:4000/superheroes/${queryKey[1]}`);
};

export default function useSuperHeroData(id) {
  // pass queryKey as array with name and id as value
  const queryClient = useQueryClient();
  return useQuery(["super-hero", id], fetchSuperHero, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    select: (data) => {
      console.log("select use super hero data", data);
      return data?.data;
    },
    initialData: () => {
      console.log("initial data");
      const hero = queryClient
        .getQueryData("super-heroes")
        ?.data?.find((hero) => hero.id === parseInt(id));
      return hero ? { data: hero } : undefined;
    },
  });
}
