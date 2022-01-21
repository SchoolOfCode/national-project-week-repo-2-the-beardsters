import React, { useState } from "react";
import Navbar from "../Navbar/navbar.js";
import Userchoice from "../Userchoice/userchoice.js";
import UserAnswer from "../UserAnswer";
import ChallengeDesc from "../ChallengeDesc";
import Userworkspace from "../Userworkspace/workspace";
import Hints from "../Hints/hints";
import Darkmode from "../Darkmode/darkmode";
import AnswerReveal from "../AnswerReveal/answer.js";

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
      <Darkmode />
      <Navbar />
      <Userchoice getQuestion={getQuestion} />
      <Userworkspace message={message} />
      <AnswerReveal message={message} score={score} />
      <Hints message={message} />
      <ChallengeDesc message={message} />
      <UserAnswer
        onClick={(e) => submitFunction(e)}
        onChange={(e) => getUserAnswer(e)}
        value={answer}
      />
    </div>
  );
}

export default App;
