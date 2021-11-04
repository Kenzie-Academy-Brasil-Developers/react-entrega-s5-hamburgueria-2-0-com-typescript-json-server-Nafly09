import "./App.css";
import { Navbar } from "./Components/Navbar";
import GlobalStyle from "./styles/global";
import { Store } from "./Pages/store";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Store />
    </>
  );
}

export default App;
