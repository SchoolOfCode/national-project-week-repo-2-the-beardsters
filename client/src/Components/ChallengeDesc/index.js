import React from "react";
import "../../Components/App/App.css";
export default function ChallengeDesc({ content }) {
  return (
    <div>
      <h4>{content.name}</h4>
      <p>{content.description}</p>
    </div>
  );
}
