export default function UserAnswer(userResponse, text) {
  return (
    <form action="#">
      <input
        type="text"
        placeholder="Add your answer here"
        onChange={userResponse.onChange}
        value={text}
      />

      <button type="submit" value="Submit" onClick={userResponse.onClick}>
        SUBMIT
      </button>
    </form>
  );
}
