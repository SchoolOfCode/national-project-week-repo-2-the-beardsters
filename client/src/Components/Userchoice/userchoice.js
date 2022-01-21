import Styles from "./userchoice.module.css";

function Userchoice({ getQuestion }) {
  return (
    <div className={Styles.formuserchoice}>
      <button
        className={Styles.btnchoicefrontend}
        onClick={() => getQuestion("frontend")}
      >
        Frontend
      </button>
      <button
        className={Styles.btnchoicebackend}
        onClick={() => getQuestion("backend")}
      >
        Backend
      </button>
    </div>
  );
}

export default Userchoice;
