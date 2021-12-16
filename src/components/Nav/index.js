import React from "react";

function Nav(props) {
  const { currentPage, setCurrentPage } = props; //if categories is not passed in, set it to an empty array
  //so that if categories is not passed in, it will not throw an error
  //if categories is passed in, set it to the categories prop which is named categories in the Nav component
  //then when the Nav component is rendered, it will pass in the categories array.

  return (
    <nav>
      <ul className="flex-row mobile-view">
        <li className={currentPage === "about" ? "mx-2 navActive" : "mx-2"}>
          <span onClick={() => setCurrentPage("about")}>About Me</span>
        </li>
        <li className={currentPage === "portfolio" ? "mx-2 navActive" : "mx-2"}>
          <span onClick={() => setCurrentPage("portfolio")}>Portfolio</span>
        </li>
        <li className={currentPage === "contact" ? "mx-2 navActive" : "mx-2"}>
          <span onClick={() => setCurrentPage("contact")}>Contact</span>
        </li>
        <li className={currentPage === "resume" ? "mx-2 navActive" : "mx-2"}>
          <span onClick={() => setCurrentPage("resume")}>Resume</span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
