import React from "react";
import ContextHook from "./components/ContextHook";
import EffectHookTitle from "./components/EffectHookTitle";
import StateHookCounter from "./components/StateHookCounter";
import ReducerHookCounter from "./components/ReducerHookCounter";
import MultipleReducerHookCounter from "./components/MultipleReducerHookCounter";
import ReducerWithContext from "./components/ReducerWithContext";
import FetchDataWithReducer from "./components/FetchDataWithReducer";

export const UserContext = React.createContext();
export const LocationContext = React.createContext();
export const JobContext = React.createContext();

function App() {
  const [job, setJob] = React.useState("Software developer");
  return (
    <div className="App">
      <header>
        <h2 className="app-title">Learn React Hooks</h2>
      </header>
      <StateHookCounter />
      <EffectHookTitle />
      <UserContext.Provider value={"John"}>
        <LocationContext.Provider value={"USA"}>
          <JobContext.Provider value={job}>
            <ContextHook />
            <div className="context-button">
              <button onClick={() => setJob("Architect")}>Change job</button>
            </div>
          </JobContext.Provider>
        </LocationContext.Provider>
      </UserContext.Provider>
      <ReducerHookCounter />
      <MultipleReducerHookCounter />
      <ReducerWithContext />
      <FetchDataWithReducer />
    </div>
  );
}

export default App;
