import React, { useState } from "react";
import About from "./components/About";
import Header from "./components/Header";

function App() {
  const [currentPage, setCurrentPage] = useState("about");

  const handleClick = () => {
    switch (currentPage) {
      case "about": //this is basically saying if the current page is "about" then return the About component
        return <About />; //return the About component if the current page is "about"

      default:
        //this is basically saying if the current page is not "about"
        return null; //then return null
    }
  };

  return (
    //make a div styled with tailwind
    <div>
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Header>
      <div>{handleClick()}</div>
    </div>
  );
}

export default App;
