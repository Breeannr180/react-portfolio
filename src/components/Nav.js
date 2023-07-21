import React from 'react';



const Navigation = ({page, setPage}) => {
  return (
    <nav>
      <ul>
        <li><a onClick={() => setPage("home")} href="#about">About</a></li>
        <li><a onClick={() => setPage("work")}  href="#portfolio">Work</a></li>
        <li><a onClick={() => setPage("contact")}href="#contact">Contact</a></li>
        <li><a onClick={() => setPage("resume")}href="#resume">Resume</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;