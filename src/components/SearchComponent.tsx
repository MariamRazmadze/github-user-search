import classes from "./SearchComponent.module.css";
import iconSearch from "../assets/icon-search.svg";
import { useState } from "react";

interface SearchProps {
  isMoon: boolean;
  fetchData: (enteredValue: string) => void;
}

function SearchComponent(props: SearchProps) {
  const [enteredValue, setEnteredValue] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.fetchData(enteredValue);
  };
  return (
    <div>
      <form
        className={`${classes.form} ${props.isMoon ? classes.darkMode : ""}`}
        onSubmit={handleSubmit}
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
        <button className={classes.button}>search</button>
      </form>
    </div>
  );
}

export default SearchComponent;
