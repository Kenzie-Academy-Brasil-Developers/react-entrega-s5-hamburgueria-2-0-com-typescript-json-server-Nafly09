import "./App.css";
import { Navbar } from "./Components/Navbar";
import GlobalStyle from "./styles/global";
import { Store } from "./Pages/store";
import Routes from "./Routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
