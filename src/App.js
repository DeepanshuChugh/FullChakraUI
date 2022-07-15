import "./App.css";
import Body from "./components/Body";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Menu />
      <Body />
    </div>
  );
}

export default App;
