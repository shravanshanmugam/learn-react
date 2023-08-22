import React from "react";
import ContextHook from "./components/ContextHook";
import EffectHookTitle from "./components/EffectHookTitle";
import StateHookCounter from "./components/StateHookCounter";

export const UserContext = React.createContext();
export const LocationContext = React.createContext();

function App() {
  return (
    <div className="App">
      <header>
        <h2 className="app-title">Learn React Hooks</h2>
      </header>
      <StateHookCounter />
      <EffectHookTitle />
      <UserContext.Provider value={"John"}>
        <LocationContext.Provider value={"USA"}>
          <ContextHook />
        </LocationContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
