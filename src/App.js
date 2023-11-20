import "./App.css";
import "./constants/colors.css";
import Header from "./components/Header";
import ItemLoatBai from "./components/ItemLoatBai";
import Welcome from "./components/Welcome";
function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <ItemLoatBai />
    </div>
  );
}

export default App;
