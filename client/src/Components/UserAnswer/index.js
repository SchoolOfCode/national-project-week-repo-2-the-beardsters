import React from "react";

export default function UserAnswer(props) {
  return (
    <form action="#">
      <input
        type="text"
        placeholder="Add your answer here"
        onChange={props.onChange}
      />

      <label>SUBMIT</label>
      <input type="submit" value="Submit" onClick={props.onClick} />
    </form>
  );
}
