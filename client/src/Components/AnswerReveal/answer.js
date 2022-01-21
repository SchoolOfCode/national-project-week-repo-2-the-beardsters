import Styles from "./answer.module.css";

function AnswerReveal({ message, score }) {
  return (
    <div className={Styles.answerreveal}>
      <details name="See answer" value="See answer" placeholder="see answer">
        <summary>See Answer</summary>
        <div> {message.answer}</div>
      </details>
      <div>Score: {score}</div>
    </div>
  );
}

export default AnswerReveal;
