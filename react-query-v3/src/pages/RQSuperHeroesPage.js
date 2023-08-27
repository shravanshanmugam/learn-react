import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};
export const RQSuperHeroesPage = () => {
  console.log("render RQSuperHeroesPage");
  const [myRefreshInterval, setMyRefreshInterval] = React.useState(3000);
  const onSuccess = (data) => {
    console.log("run side effect after API success response", data);
    /**
     * Stop polling once length of data is 4.
     * To verify this, set enabled to true and append this to db.json
     *
     * {"id":4,"name":"Flash","alterEgo":"Barry Allen"}
     */
    if (data.length === 4) setMyRefreshInterval(false);
  };
  const onError = (error) => {
    console.log("run side effect after API error response", error);
    setMyRefreshInterval(false);
  };
  /**
   * react query caches the data for 5 minutes using query key and function as the unique key.
   * when loading this component it checks if data is present in cache for this API.
   * if the data is present in cache, it is immediately returned without setting isLoading to true.
   * however, background refetch is triggered and on success the new data is updated in the UI.
   * when background refetch happens isFetching will be set to true but isLoading will bet set to false.
   * when refetch happens after cached data expires, both isLoading and isFetching will be set to true.
   * the cached data is garbage collected after the cache time expires.
   * cache only expires when component is unmounted.
   *
   * To check this go to Devtools -> Network and set Throttling to Slow 3G.
   * then switch between Traditional Super Heroes page and RQ Super Heroes page and check in React query dev tools.
   * switch to different tab or window and come back and check in React query dev tools.
   *
   * we can also configure stale time which turns cached data state from fresh to stale after the time expires.
   * refetch will happen if cache has expired even when stale time has not expired.
   *
   * polling for data at regular intervals, it is not dependent on refetch on mount or refetch on window focus
   *
   * we can pass onSuccess, onError callbacks if we want to run side effects after fetching data.
   * on API failure, it retries 3 times. if failed all 3 attempts, then it call onError callback.
   *
   * To check error scenario change the url and refresh the page or click on the button.
   */
  // response comes in data.data
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      enabled: false, // default value is true. prevents fetching on mount.
      cacheTime: 30000, // default value is 5 minutes. caching prevents loading screen
      staleTime: 5000, // default value is 0 - so it refetches everytime. staleness prevents immediate refresh when not required.
      refetchOnMount: false, // default value is true. this prevents refreshing data when switching routes/pages.
      refetchOnWindowFocus: false, // default value is true. this prevents refreshing data when switching tabs/windows.
      refetchInterval: myRefreshInterval, // default value is false.
      refetchIntervalInBackground: true, // default value is false.
      onSuccess,
      onError,
      select: (data) => {
        console.log("select callback to transform or filter the data");
        return data.data.map((hero) => hero.name);
      }, // select callback runs before onSuccess callback. it is only called in case of success.
    }
  );
  /**
   * =======
   * SUMMARY
   * =======
   *
   * enabled prevents fetching on mount. it can be used to fetch on event like click of a button.
   *
   * cache depends on unmount. if cache is present, loading = false, fetching = true.
   * cache deals with loading screen.
   *
   * staleness is dependent on cache. if not stale, loading = false, fetching = false.
   * if cache expires, it is considered stale. if cache expired, loading = true, fetching = true.
   * staleness deals with refetching.
   *
   * refetch on mount when false is not dependent on staleness but it is dependent on cache.
   *
   * refetch on window focus when false is not dependent on staleness or cache.
   *
   * refetch interval is paused when switching tabs/windows.
   *
   * refetch interal in background will poll even when switching tabs/windows.
   */
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
      {data?.map((heroName) => {
        return <div key={heroName}>{heroName}</div>;
      })}
      <button onClick={refetch}>Fetch Super Heroes!</button>
    </>
  );
};
