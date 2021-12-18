import React from "react";

export default function Portfolio() {
  //here were going to make a an array of objects that will be used to display the portfolio
  //we're going to use the map function to loop through the array and return a div for each object
  //we're going to use the object's name as the key and the object's image as the value
  const projects = [
    {
      name: "AW-SOME Organics",
      image: "./images/awsome.PNG",
      description: "HandleBar, mongoDB, mongoose App for small business owner",
      technologies: [
        "React, Node, Express, mongoDB, mongoose, bcrypt, sessions, handlebars, Heroku",
      ],
      github: "https://github.com/osbym/awsome-organics-gp2",
      deployed: "https://awsomeorganics.herokuapp.com/",
    },
    {
      name: "Game Suggestion App ",
      image: "./images/game.PNG",
      description:
        "Colaborative application that allows users find other cool games and giveaways!",
      technologies: [
        "JavaScript, CSS, HTML, ServerSideAPI, fetch API, AJAX, jQuery, Bootstrap, moment.js, template literals, JSON, git workflow, ZenHub",
      ],
      github: "",
      deployed: "https://osbym.github.io/videogame-recommender/",
    },
    {
      name: "API for a Social Media App",
      image: "https://i.imgur.com/qQqQQQQ.png",
      description:
        "Backend CRUD API that utilizes sub documents, .populate(), .virtuals()",
      technologies: [
        "JavaScript, Node, Express, mongoDB, mongoose, Insomnia, JSON, Heroku, MVC architecture",
      ],
      github: "https://github.com/hacatac/hacSocialize",
      deployed: "https://hacSocialize.herokuapp.com/",
    },
    {
      name: "Workforce Management System",
      image: "https://i.imgur.com/qQqQQQQ.png",
      description:
        "Backend Workforce Management System that will help you manage your team",
      technologies: [
        "JavaScript,  Node, Express, mySql, mongoose, Insomnia, JSON, ScreenCastify, MVC architecture",
      ],
      github: "https:github.com/hacatac/hacEmployeeTracker",
      deployed: "https://hacEmployeeTracker.herokuapp.com/",
    },
    {
      name: "Backend API for eCommerce App",
      image: "https://i.imgur.com/qQqQQQQ.png",
      description:
        "Backend API for eCommerce App that utilized CRUD methods to create, read, update, and delete data",
      technologies: [
        "JavaScript, Node, Express, sequelize, mySQL, Insomnia, JSON, ScreenCastify, MVC architecture, object-oriented programming",
      ],
      github: "https:github.com/hacatac/hac_E_Com_Backend",
      deployed: "https://hac_E_Com_Backend.herokuapp.com/",
    },
  ];

  //here I need to make a return of JSX that will be used to display my portfolio projects in cards
  //we're going to use the map function to loop through the array and return a div for each object
  //we're going to use the object's name as the key and the object's image as the value
  //we're going to need to also show pictures of the project
  return (
    <div className="container">
      <h1 className="Portfolio Projects"> Portfolio Projects</h1>

      <div className="flex flex-wrap justify-around">
        {projects.map((project) => (
          <div className="card">
            <img
              src={project.image}
              className="card-img-top"
              alt={project.name}
            />
            <div className="card-body">
              <h5 className="card-title">{project.name}</h5>
              <p className="card-text">{project.description}</p>
              <a href={project.github} className="btn btn-primary">
                <img
                  src="https://img.icons8.com/color/48/000000/github.png"
                  alt="github"
                />
              </a>
              <a href={project.deployed} className="btn btn-primary">
                Deployed App
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
