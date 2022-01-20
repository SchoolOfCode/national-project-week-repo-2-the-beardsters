function Userchoice({ getQuestion }) {
  return (
    <div className="form-user-choice">
      <button
        className="btn-choice-frontend"
        onClick={() => getQuestion("frontend")}
      >
        Frontend
      </button>
      <button
        className="btn-choice-backend"
        onClick={() => getQuestion("backend")}
      >
        Backend
      </button>
    </div>
  );
}

export default Userchoice;
