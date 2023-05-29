import React from "react";
import Navbar from "./components/Navbar";
import SearchComponent from "./components/SearchComponent";
import Card from "./components/Card";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [isMoon, setIsMoon] = useState(false);
  const [data, setData] = useState({
    name: "The Octocat",
    login: "octocat",
    created_at: "2011-01-25T18:44:36Z",
    bio: null,
    avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
    location: "San Francisco",
    blog: "https://github.blog",
    twitter_username: null,
    company: "@github",
    public_repos: 8,
    followers: 9323,
    following: 9,
  });
  const fetchData = async (enteredValue: string) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${enteredValue}`
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = () => {
    setIsMoon(!isMoon);
    document.body.style.backgroundColor = isMoon ? "#f6f8ff" : "#141D2F";
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div>
      <Navbar isMoon={isMoon} handleClick={handleClick} />
      <SearchComponent isMoon={isMoon} fetchData={fetchData} />
      <Card isMoon={isMoon} data={data} />
    </div>
  );
}

export default App;
