import React from "react";
import Journal from "./Journal";
import Header from "./Header";
import data from "../journalData"

function App() {
  return <div>
    <Header/>
  {data.map(item => {
    return <Journal {...item}/>
  })}
  </div>
}

export default App;
