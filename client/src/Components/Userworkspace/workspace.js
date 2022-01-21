import Styles from "./workspace.module.css";

export default function Userworkspace({ message }) {
  return <div className={Styles.userworkspace}>{message.body}</div>;
}
