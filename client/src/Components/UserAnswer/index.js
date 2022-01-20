export default function UserAnswer(userResponse) {
  return (
    <form action="#">
      <input
        type="text"
        placeholder="Add your answer here"
        onChange={userResponse.onChange}
      />

      <button type="submit" value="Submit" onClick={userResponse.onClick}>
        SUBMIT
      </button>
    </form>
  );
}
