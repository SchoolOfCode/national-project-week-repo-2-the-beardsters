import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "../Navbar/navbar.js";
import Userchoice from "../Userchoice/userchoice.js";
import UserAnswer from "../UserAnswer";
import ChallengeDesc from "../ChallengeDesc";
import Userworkspace from "../Userworkspace/workspace";
import Hints from "../Hints/hints";

function App() {
  const [message, setMessage] = useState({});
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://soc-challenge-generator.herokuapp.com/");
      const data = await res.json();
      console.log(data.payload[0]);
      setMessage(data.payload[0]);
      return data;
    }
    getData();
  }, []);

  function getUserAnswer(e) {
    setAnswer(e.target.value);
    console.log(answer);
  }

  function submitFunction(e) {
    if (answer === message.answer) {
      console.log(message.answer);
      console.log("Right answer");
    } else {
      console.log(message.answer);
      console.log("wrong answer");
    }
  }

  return (
    <div className="App" id="home">
      <Navbar />
      <Userchoice onClick={null} />
      <Userworkspace message={message} />
      <Hints message={message} />
      <ChallengeDesc message={message} />
      <details name="See answer" value="See answer" placeholder="see answer">
        <summary>See Answer</summary>
        <div> {message.answer}</div>
      </details>
      <UserAnswer
        onClick={(e) => submitFunction(e)}
        onChange={(e) => getUserAnswer(e)}
      />
    </div>
  );
}

export default App;
