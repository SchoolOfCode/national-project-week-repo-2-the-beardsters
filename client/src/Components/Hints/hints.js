import Styles from "./hints.module.css";

export default function Hints({ message }) {
  return <div className={Styles.userhint}>{message.hint}</div>;
}
