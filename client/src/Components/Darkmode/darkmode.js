import Styles from "./darkmode.module.css";

function Darkmode() {
  return (
    <div className={Styles.switchcontainer}>
      <input className={Styles.darkmodeinput} type="checkbox" id="switch" />
      <label className={Styles.label} htmlFor="switch">
        <i className={Styles.labelfafamoon}></i>
        <i className={Styles.labelfafasun}></i>
        <span className={Styles.ball}></span>
      </label>
    </div>
  );
}

export default Darkmode;
