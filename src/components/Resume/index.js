// This page will have a link to my downloadable pdf resume
// Then it will have a list of my proficiencies on front end in one container and back end in another container

import React from "react";

export default function Resume() {
  return (
    <div className="container">
      <h1 id="resume-title">Resume</h1>
      <div className="flex flex-wrap justify-center">
        <div className="col-md-6 mr-20 pt-10">
          <h3 id="front-end-title">Front End</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Web APIs</li>
            <li>Third Party APIs</li>
            <li>Server Side APIs</li>
            <li>Tailwind</li>
            <li>Bulma</li>
            <li>Bootstrap</li>
            <li>Media Queries</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li></li>
          </ul>
        </div>
        <div className="col-md-6 mr-20 pt-10">
          <h3 id="back-end-title">Back End</h3>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>MongoDB Atlas</li>
            <li>Postman</li>
            <li>Heroku</li>
            <li>GitHub</li>
            <li>Jest</li>
            <li>OOP</li>
            <li>MVC</li>
            <li>RESTful API</li>
            <li>CRUD</li>
            <li>Sessions</li>
            <li>Bcrypt</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
