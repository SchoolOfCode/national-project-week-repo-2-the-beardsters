import Styles from "./useranswer.module.css";

export default function UserAnswer(userResponse) {
  return (
    <form className={Styles.useranswer} action="#">
      <input
        type="text"
        placeholder="Add your answer here"
        onChange={userResponse.onChange}
        value={userResponse.value}
      />

      <button type="submit" value="Submit" onClick={userResponse.onClick}>
        SUBMIT
      </button>
    </form>
  );
}
