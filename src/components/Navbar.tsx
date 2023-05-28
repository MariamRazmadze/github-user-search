import classes from "./Navbar.module.css";
import { useState } from "react";
import iconMoon from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";

const moon = iconMoon;
const sun = iconSun;

function Navbar() {
  const [isMoon, setIsMoon] = useState(true);

  const handleClick = () => {
    setIsMoon(!isMoon);
    document.body.style.backgroundColor = isMoon ? "#141D2F" : "#f6f8ff";
    const title = document.getElementById("title");
    if (title) {
      title.classList.toggle(classes.darkMode);
    }
    const modeText = document.getElementById("modeText");
    if (modeText) {
      modeText.classList.toggle(classes.darkMode);
    }
  };

  return (
    <div>
      <div className={classes.navbar}>
        <h1 id="title" className={classes.title}>
          devfinder
        </h1>
        <div className={classes.mode}>
          <h2 id="modeText" className={classes.modeText}>
            dark
          </h2>
          <div>
            <img
              src={isMoon ? moon : sun}
              alt="modeIcon"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
