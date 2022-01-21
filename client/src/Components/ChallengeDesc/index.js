import Styles from "./challenge.module.css";

export default function ChallengeDesc({ message }) {
  return (
    <div className={Styles.challengedescpanel}>
      <h4 className={Styles.challengedesctitle}>{message.name}</h4>
      <p className={Styles.challengedesc}>{message.description}</p>
    </div>
  );
}
