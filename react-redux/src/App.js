import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <CakeContainer showCount />
        <IceCreamContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
