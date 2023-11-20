import "./App.css";
import "./constants/colors.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import LoatBai from "./components/LoatBai";
function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <LoatBai />
    </div>
  );
}

export default App;
