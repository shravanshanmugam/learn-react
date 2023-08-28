import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};
function useSuperHeroesData(myRefreshInterval, onSuccess, onError) {
  return useQuery("super-heroes", fetchSuperHeroes, {
    enabled: false,
    cacheTime: 30000,
    staleTime: 5000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchInterval: myRefreshInterval,
    refetchIntervalInBackground: true,
    onSuccess,
    onError,
    select: (data) => {
      console.log("select callback to transform or filter the data");
      // return data.data.map((hero) => hero.name);
      return data.data;
    },
  });
}

export default useSuperHeroesData;
