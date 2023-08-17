import React from "react";
import Journal from "./Journal";
import data from "../data"

function App() {
  return data.map(item => {
    return <Journal {...item}/>
  })
}

export default App;
