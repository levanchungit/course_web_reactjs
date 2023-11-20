import "./App.css";
import "./constants/colors.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import LoatBai from "./components/LoatBai";
import GioiThieu from "./components/GioiThieu";
function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <LoatBai />
      <GioiThieu />
    </div>
  );
}

export default App;
