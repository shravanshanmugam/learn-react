import React, { Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";

export async function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

export async function getWeather() {
  await sleep(3000);
  const res = await fetch(
    "https://apis.scrimba.com/openweathermap/data/2.5/weather?q=Salt+Lake+City&units=imperial"
  );
  if (!res.ok) {
    throw {
      error: "Problem getting weather info",
    };
  }
  const data = await res.json();
  return data;
}

export async function loader() {
  const weatherPromise = getWeather();
  return defer({ weather: weatherPromise });
}

export default function Weather() {
  console.log("render Weather");
  const loaderData = useLoaderData();

  function renderWeather() {
    return (loadedWeather) => <h3>{loadedWeather.main.temp}ºF</h3>;
  }

  return (
    <section className="weather-container">
      <h1>Weather in Salt Lake City</h1>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Await resolve={loaderData.weather}>{renderWeather()}</Await>
      </Suspense>
    </section>
  );
}
