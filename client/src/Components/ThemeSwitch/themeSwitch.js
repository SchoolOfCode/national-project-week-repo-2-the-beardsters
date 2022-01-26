import { useState } from "react";
import Styles from "./themeSwitch.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function ThemeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const darkModeStyles = isDarkMode ? Styles.darkMode : null;

  const htmlElement = document.documentElement;

  const setLightModeProperties = () => {
    htmlElement.style.setProperty("--primary-background-colour", "#f0f6f9");
    htmlElement.style.setProperty("--switch-ball-colour", "#f0f6f9");
    htmlElement.style.setProperty("--panel-inner-colour", "#f0f6f9");
    htmlElement.style.setProperty("--navbar-colour", "#6998ab");
    htmlElement.style.setProperty("--panel-outer-colour", "#6998ab");
    htmlElement.style.setProperty("--score-colour", "#406882");
    htmlElement.style.setProperty("--button-colour", "#1a374d");
    htmlElement.style.setProperty("--score-outline-colour", "#1a374d");
    htmlElement.style.setProperty("--switch-background-colour", "#000000");
    htmlElement.style.setProperty("--switch-icon-colour", "#ffe300");
  };

  const setDarkModeProperties = () => {
    htmlElement.style.setProperty("--primary-background-colour", "#1a374d");
    htmlElement.style.setProperty("--switch-ball-colour", "#1a374d");
    htmlElement.style.setProperty("--panel-inner-colour", "#000000");
    htmlElement.style.setProperty("--navbar-colour", "#406882");
    htmlElement.style.setProperty("--panel-outer-colour", "#406882");
    htmlElement.style.setProperty("--score-colour", "#406882");
    htmlElement.style.setProperty("--button-colour", "#6998ab");
    htmlElement.style.setProperty("--score-outline-colour", "#6998ab");
    htmlElement.style.setProperty("--switch-background-colour", "#6998ab");
    htmlElement.style.setProperty("--switch-icon-colour", "#f0f6f9");
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      setLightModeProperties();
    } else {
      setDarkModeProperties();
    }
  };

  return (
    <button className={`${Styles.switch}`} onClick={toggleTheme}>
      <div className={darkModeStyles} />
      <div className={Styles.label} htmlFor="switch">
        <FontAwesomeIcon icon={faMoon} size="lg" />
        <FontAwesomeIcon icon={faSun} size="lg" color={"#ffe300"} />
        <span className={Styles.ball}></span>
      </div>
    </button>
  );
}

export default ThemeSwitch;
