import React from "react";
import "../../Components/App/App.css";
export default function ChallengeDesc({ message }) {
  return (
    <div>
      <h4>{message.name}</h4>
      <p>{message.description}</p>
    </div>
  );
}
