import React from "react";
import Navbar from "./components/Navbar";
import SearchComponent from "./components/SearchComponent";
import { useState } from "react";

function App() {
  const [isMoon, setIsMoon] = useState(true);
  const handleClick = () => {
    setIsMoon(!isMoon);
    document.body.style.backgroundColor = isMoon ? "#f6f8ff" : "#141D2F";
  };
  return (
    <div>
      <Navbar isMoon={isMoon} handleClick={handleClick} />
      <SearchComponent />
    </div>
  );
}

export default App;
