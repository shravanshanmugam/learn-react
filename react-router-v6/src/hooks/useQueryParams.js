import React from "react";
import { useSearchParams } from "react-router-dom";
export default function useQueryParams(key, value) {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleChange = (key, value) =>
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  return [searchParams, handleChange];
}
