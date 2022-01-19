import "./App.css";
import Navbar from "../Navbar/navbar.js";
import UserInput from "../UserInput/UserInput";

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
    <div className="App">
      <Navbar></Navbar>
      <UserInput />
    </div>
  );
}

export default App;
