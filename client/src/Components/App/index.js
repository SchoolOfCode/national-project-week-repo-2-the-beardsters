import "./App.css";
import Navbar from "../Navbar/navbar.js";
import Darkmode from "../Darkmode/darkmode";

function App() {
  async function getData() {
    const res = await fetch(
      "https://soc-challenge-generator.herokuapp.com/backend"
    );
    const data = await res.json();
    console.log(data);
    return data;
  }
  const result = getData();

  return (
    <div className="App" id="home">
      <Darkmode />
      <Navbar />
    </div>
  );
}

export default App;
