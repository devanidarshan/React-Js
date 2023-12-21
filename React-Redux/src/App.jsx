import "./App.css";
import CakeContainer from "./Components/CakeContainer";
// import HooksCakeContainer from "./Components/Redux/Cake/HookCakeContainer";
import { Provider } from "react-redux";
import store from "./Components/Redux/Store";

function App() {
  return (
    <>
      <Provider store={store}>
        <CakeContainer />
        {/* <HooksCakeContainer/> */}
      </Provider>
    </>
  );
}

export default App;
