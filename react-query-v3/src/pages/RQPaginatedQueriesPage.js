import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const fetchColors = (pageNumber) => {
  console.log("pageNumber", pageNumber);
  return axios.get(`http://localhost:4000/colors?_limit=5&_page=${pageNumber}`);
};
function RQPaginatedQueriesPage() {
  console.log("render RQPaginatedQueriesPage");
  const [pageNumber, setPageNumber] = React.useState(1);
  const { data: colors, isFetching } = useQuery(
    ["colors", pageNumber],
    () => fetchColors(pageNumber),
    {
      select: (data) => data.data,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      keepPreviousData: true, // keep previously fetched data while fetching in the background
    }
  );
  const previousPage = (e) => {
    e.preventDefault();
    setPageNumber((prevPageNumber) => prevPageNumber - 1);
  };

  const nextPage = (e) => {
    e.preventDefault();
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };
  return (
    <>
      {colors &&
        colors.map((color) => {
          return (
            <h2 key={color.id} style={{ color: color.label }}>
              This color is {color.label}
            </h2>
          );
        })}
      <button onClick={previousPage} disabled={pageNumber === 1}>
        &lt;Previous
      </button>
      <button onClick={nextPage} disabled={pageNumber === 3}>
        Next&gt;
      </button>
      <div>{isFetching && "Loading in background..."}</div>
    </>
  );
}

export default RQPaginatedQueriesPage;
