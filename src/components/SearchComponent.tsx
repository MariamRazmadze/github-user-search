import classes from "./SearchComponent.module.css";
import iconSearch from "../assets/icon-search.svg";
import { useState } from "react";
import axios from "axios";

interface SearchProps {
  isMoon: boolean;
}

function SearchComponent(props: SearchProps) {
  const [enteredValue, setEnteredValue] = useState("");
  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event) {
      event.preventDefault();
    }
    axios
      .get(`https://api.github.com/users/${enteredValue}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setEnteredValue("");
      });
  };

  return (
    <div>
      <form
        className={`${classes.form} ${props.isMoon ? classes.darkMode : ""}`}
      >
        <div>
          <img
            src={iconSearch}
            alt="searchIcon"
            className={classes.iconSearch}
          />
        </div>
        <input
          type="text"
          name="userInput"
          id="userInput"
          className={`${classes.userInput} ${
            props.isMoon ? classes.darkMode : ""
          }`}
          placeholder="Search GitHub username..."
          value={enteredValue}
          onChange={(e) => setEnteredValue(e.target.value)}
        />
        <button className={classes.button} onClick={handleClick}>
          search
        </button>
      </form>
    </div>
  );
}

export default SearchComponent;
