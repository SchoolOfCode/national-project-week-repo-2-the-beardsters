import React, { useState } from "react";
import "./App.css";
import Navbar from "../Navbar/navbar.js";
import Userchoice from "../Userchoice/userchoice.js";
import UserAnswer from "../UserAnswer";
import ChallengeDesc from "../ChallengeDesc";
import Userworkspace from "../Userworkspace/workspace";
import Hints from "../Hints/hints";
import Darkmode from "../Darkmode/darkmode";

const API_URL =
  process.env.REACT_APP_API_URL ||
  "https://soc-challenge-generator.herokuapp.com/";

function App() {
  const [message, setMessage] = useState({});
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);

  function getUserAnswer(e) {
    setAnswer(e.target.value);
    console.log(answer);
  }

  async function getQuestion(type) {
    const res = await fetch(`${API_URL}/${type}`, { cache: "no-cache" });
    const data = await res.json();
    console.log(data.payload[0]);
    setMessage(data.payload[0]);
    return data;
  }

  function submitFunction(e) {
    if (answer === message.answer) {
      //console.log(message.answer);
      alert("Right answer");
      setScore(score + 1);
    } else {
      //console.log(message.answer);
      alert("wrong answer");
    }
    setAnswer("");
  }

  return (
    <div className="App" id="home">
      <Darkmode className="dark-mode" />
      <Navbar className="navbar" />
      <Userchoice className="userchoice" getQuestion={getQuestion} />
      <Userworkspace className="userworkspace" message={message} />
      <Hints className="hints" message={message} />
      <ChallengeDesc className="challenge-desc" message={message} />
      <details name="See answer" value="See answer" placeholder="see answer">
        <summary>See Answer</summary>
        <div> {message.answer}</div>
      </details>
      <div>Score: {score}</div>
      <UserAnswer
        className="user-answer"
        onClick={(e) => submitFunction(e)}
        onChange={(e) => getUserAnswer(e)}
        value={answer}
      />
    </div>
  );
}

export default App;
