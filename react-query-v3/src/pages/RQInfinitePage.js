import React from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import axios from "axios";

const fetchColors = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`);
};
function RQInfinitePage() {
  console.log("render RQInfinitePage");
  const { data, hasNextPage, fetchNextPage, isFetching, isFetchingNextPage } =
    useInfiniteQuery("colors", fetchColors, {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      getNextPageParam: (_lastPage, pages) => {
        return pages.length < 7 ? pages.length + 1 : undefined;
      },
    });
  return (
    <>
      <h2>Fetched colors</h2>
      {data &&
        data?.pages.map((group, index) => {
          return (
            <React.Fragment key={index}>
              {group.data.map((color) => {
                return <h2 key={color.id}>This is color {color.label}</h2>;
              })}
            </React.Fragment>
          );
        })}
      {hasNextPage && (
        <button onClick={fetchNextPage} disabled={!hasNextPage}>
          Load more
        </button>
      )}
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
}

export default RQInfinitePage;
