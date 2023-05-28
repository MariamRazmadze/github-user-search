import classes from "./Navbar.module.css";
import iconMoon from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";

const moon = iconMoon;
const sun = iconSun;

interface NavbarProps {
  isMoon: boolean;
  handleClick: () => void;
}

function Navbar(props: NavbarProps) {
  return (
    <div>
      <div className={classes.navbar}>
        <h1
          id="title"
          className={`${classes.title} ${props.isMoon ? classes.darkMode : ""}`}
        >
          devfinder
        </h1>
        <div className={classes.mode}>
          <h2
            id="modeText"
            className={`${classes.modeText} ${
              props.isMoon ? classes.darkMode : ""
            }`}
          >
            {props.isMoon ? "light" : "dark"}
          </h2>
          <div>
            <img
              src={props.isMoon ? sun : moon}
              alt="modeIcon"
              onClick={props.handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
