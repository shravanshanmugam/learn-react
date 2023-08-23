import React from "react";
import ContextHook from "./components/ContextHook";
import EffectHookTitle from "./components/EffectHookTitle";
import StateHookCounter from "./components/StateHookCounter";
import ReducerHookCounter from "./components/ReducerHookCounter";
import MultipleReducerHookCounter from "./components/MultipleReducerHookCounter";
import ReducerWithContext from "./components/ReducerWithContext";
import FetchDataWithReducer from "./components/FetchDataWithReducer";
import CallbackHookCounter from "./components/CallbackHookCounter";
import MemoHookCounter from "./components/MemoHookCounter";
import RefHookFocusInput from "./components/RefHookFocusInput";
import RefHookTimer from "./components/RefHookTimer";
import CustomHookDocTitle from "./components/CustomHookDocTitle";
import CustomHookCounter from "./components/CustomHookCounter";
import CustomHookFormInput from "./components/CustomHookFormInput";

// create context
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
      {/* surround component which requires context with Context.Provider and pass the state as value */}
      <UserContext.Provider value={"John"}>
        <LocationContext.Provider value={"USA"}>
          <JobContext.Provider value={job}>
            <ContextHook />
            <div className="sub-container">
              <button onClick={() => setJob("Architect")}>Change job</button>
            </div>
          </JobContext.Provider>
        </LocationContext.Provider>
      </UserContext.Provider>
      <ReducerHookCounter />
      <MultipleReducerHookCounter />
      <ReducerWithContext />
      <FetchDataWithReducer />
      <CallbackHookCounter />
      <MemoHookCounter />
      <RefHookFocusInput />
      <RefHookTimer />
      <CustomHookDocTitle />
      <CustomHookCounter />
      <CustomHookFormInput />
    </div>
  );
}

export default App;
