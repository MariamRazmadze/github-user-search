import classes from "./SearchComponent.module.css";
import iconSearch from "../assets/icon-search.svg";
import { useState } from "react";
import axios from "axios";

const octocat = {
  avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
  bio: null,
  blog: "https://github.blog",
  company: "@github",
  created_at: "2011-01-25T18:44:36Z",
  email: null,
  events_url: "https://api.github.com/users/octocat/events{/privacy}",
  followers: 9323,
  followers_url: "https://api.github.com/users/octocat/followers",
  following: 9,
  following_url: "https://api.github.com/users/octocat/following{/other_user}",
  gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
  gravatar_id: "",
  hireable: null,
  html_url: "https://github.com/octocat",
  id: 583231,
  location: "San Francisco",
  login: "octocat",
  name: "The Octocat",
  node_id: "MDQ6VXNlcjU4MzIzMQ==",
  organizations_url: "https://api.github.com/users/octocat/orgs",
  public_gists: 8,
  public_repos: 8,
  received_events_url: "https://api.github.com/users/octocat/received_events",
  repos_url: "https://api.github.com/users/octocat/repos",
  site_admin: false,
  starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
  twitter_username: null,
  type: "User",
  updated_at: "2023-05-22T11:20:34Z",
  url: "https://api.github.com/users/octocat",
};

function SearchComponent() {
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
      <form className={classes.form}>
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
          className={classes.userInput}
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
