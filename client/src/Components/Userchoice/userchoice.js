function Userchoice(props) {
  return (
    <div className="form-user-choice">
      <button className="btn-choice" onClick={props.onClick}>
        Front-End
      </button>
      <button className="btn-choice" onClick={props.onClick}>
        Back-End
      </button>
    </div>
  );
}

export default Userchoice;
