import React from "react";
import Navbar from "./components/Navbar";
import SearchComponent from "./components/SearchComponent";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const [isMoon, setIsMoon] = useState(false);
  const handleClick = () => {
    setIsMoon(!isMoon);
    document.body.style.backgroundColor = isMoon ? "#f6f8ff" : "#141D2F";
  };
  return (
    <div>
      <Navbar isMoon={isMoon} handleClick={handleClick} />
      <SearchComponent isMoon={isMoon} />
      <Card isMoon={isMoon} />
    </div>
  );
}

export default App;
