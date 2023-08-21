import EffectHookTitle from "./components/EffectHookTitle";
import StateHookCounter from "./components/StateHookCounter";

function App() {
  return (
    <div className="App">
      <header>
        <h2 className="app-title">Learn React Hooks</h2>
      </header>
      <StateHookCounter />
      <EffectHookTitle />
    </div>
  );
}

export default App;
