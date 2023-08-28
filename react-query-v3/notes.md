# React Query

## API Response

- response comes in `data.data`

## Cache time

- react query caches the data using `queryKey` and fetch function as the unique key.
- when loading this component, it checks if data is present in cache for this API.
- if the data is present in cache, it is immediately returned without setting `isLoading` to `true`.
- however, background refetch is triggered and on success the new data is updated in the UI.
- when background refetch happens `isFetching` will be set to `true` but `isLoading` will bet set to `false`.
- when refetch happens after cached data expires, both `isLoading` and `isFetching` will be set to `true`.
- the cached data is garbage collected after the cache time expires.
- cache only expires when component is unmounted.

## Stale time

- we can also configure stale time which turns cached data state from fresh to stale after the time expires.
- refetch will happen if cache has expired even when stale time has not expired.

## Polling

- polling for data at regular intervals, it is not dependent on refetch on mount or refetch on window focus

## Callbacks

- we can pass `onSuccess`, `onError` callbacks if we want to run side effects after fetching data.
- on API failure, it retries `3 times`. if failed all 3 attempts, then it calls `onError` callback.

## Debug

- go to Devtools -> Network and set Throttling to Slow 3G.
- switch between _Traditional Super Heroes_ page and _RQ Super Heroes_ page and check in React query dev tools.
- switch to different tab or window and come back and check in React query dev tools.
- To check error scenario change the url and refresh the page or click on the button.
- To check refresh interval scenario do the following
  - Stop polling once length of data is 4.
  - To verify this, set `enabled` to `true` and append this to db.json

```json
{ "id": 4, "name": "Flash", "alterEgo": "Barry Allen" }
```

## Query

- write function to call API

```js
const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};
```

- use `useQuery` hook to fetch data

```js
const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
  "super-heroes",
  fetchSuperHeroes
);
```

- return component based on state

```js
if (isLoading || isFetching) {
  return <h2>Loading...</h2>;
}
if (isError) {
  return <h2>{error.message}</h2>;
}
```

## Query by id

- pass query key as an array with name and id as value

```js
const { isLoading, data } = useQuery(["super-hero", id], fetchSuperHero);
```

- in fetch API function, accept `queryKey` as parameter, `queryKey[1]` will contain the id

```js
const fetchSuperHero = ({ queryKey }) => {
  return axios.get(`http://localhost:4000/superheroes/${queryKey[1]}`);
};
```

## Parallel queries

- use two `useQuery` hooks, one for each API

## Dynamic parallel queries

- use `useQueries` hook and write mapper to return properties of fetch API

```js
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
```

## Dependent queries

- set dependent query `enabled` flag as `false` so it does not fetch on mount

```js
// here channelId is dependent on users
const { data: channel } = useQuery(
  ["channels", channelId],
  () => fetchChannel(channelId),
  {
    enabled: !!channelId, // double negation sets to false if channelId is not present
    select: (data) => data?.data,
  }
);
```

## Initial data

- set initial data function to fetch data from cache of another fetch API query to prevent loading
- we can do this using `useQueryClient` hook

```js
const queryClient = useQueryClient();
return useQuery(["super-hero", id], fetchSuperHero, {
  select: (data) => {
    return data?.data;
  },
  initialData: () => {
    const hero = queryClient
      .getQueryData("super-heroes")
      ?.data?.find((hero) => hero.id === parseInt(id));
    return hero ? { data: hero } : undefined;
  },
});
```

- `select` callback will be called after `initialData` function is called

## Paginated query

- can be done similar to `Query by id` and managing `pageNumber` using `useState` hook
- set `keepPreviousData` to `true` so the previously fetch data stays on screen while fetching data for new query key in the background

## Summary

- enabled prevents fetching on mount. it can be used to fetch on event like click of a button.
- cache depends on unmount. if cache is present, `loading = false, fetching = true`.
- cache deals with loading screen.
- staleness is dependent on cache. if not stale, `loading = false, fetching = false`.
- if cache expires, it is considered stale. if cache expired, `loading = true, fetching = true`.
- when data becomes stale, it renders the component one time without refetching the data.
- staleness deals with refetching.
- refetch on mount when false is not dependent on staleness but it is dependent on cache.
- refetch on window focus when false is not dependent on staleness or cache.
- refetch interval is paused when switching tabs/windows.
- refetch interal in background will poll even when switching tabs/windows.

## Default values

| **Property**                | **Default value** | **Description**                                                                                     |
| --------------------------- | ----------------- | --------------------------------------------------------------------------------------------------- |
| enabled                     | true              | Fetches data on mount                                                                               |
| cacheTime                   | 5 mins            | Prevents loading screen by showing cached data when refetching in the background                    |
| staleTime                   | 0                 | Prevents refetching data when it is not required                                                    |
| refetchOnMount              | true              | Prevents refetching the data when switching routes or pages                                         |
| refetchOnWindowFocus        | true              | Prevents refetching the data when switching tabs or windows                                         |
| refetchInterval             | false             | Polls for data at regular interval                                                                  |
| refetchIntervalInBackground | false             | Polls for data even when user is not active                                                         |
| onSuccess                   |                   | Called when fetching data is successful                                                             |
| onError                     |                   | Called after 3 retries when fetching data fails                                                     |
| select                      |                   | Called before onSuccess callback. Can be used to transform or filter data                           |
| keepPreviousData            | false             | Keeps previously fetched data on the screen while fetching data for new query key in the background |
