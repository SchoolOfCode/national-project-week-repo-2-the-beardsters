import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "../Navbar/navbar.js";
import Userchoice from "../Userchoice/userchoice.js";
import UserAnswer from "../UserAnswer";
import ChallengeDesc from "../ChallengeDesc";

function App() {
  const [message, setMessage] = useState("message");
  const [answer, setAnswer] = useState("");

  async function getData() {
    const res = await fetch("https://soc-challenge-generator.herokuapp.com/");
    const data = await res.json();
    console.log(data.payload[0]);
    setMessage(data.payload[0]);
    return data;
  }

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
      <Userchoice onClick123={getData} />
      <h1>Test</h1>
      <ChallengeDesc test="test" content={message} />
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
