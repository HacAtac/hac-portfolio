import React from "react";

export default function Portfolio() {
  //here were going to make a an array of objects that will be used to display the portfolio
  //we're going to use the map function to loop through the array and return a div for each object
  //we're going to use the object's name as the key and the object's image as the value
  const projects = [
    {
      name: "Awsome-Organics",
      image: "https://i.imgur.com/qQqQQQQ.png",
      description: "Full-Stack Application for small business owner",
      technologies: [
        "React, Node, Express, mongoDB, mongoose, bcrypt, sessions, handlebars, Heroku",
      ],
      github: "https://github.com/HacAtac/Awesome-Organics",
      deployed: "https://awesome-organics.herokuapp.com/",
    },
    {
      name: "Game Suggestion App ",
      image: "https://i.imgur.com/qQqQQQQ.png",
      description:
        "Colaborative application that allows users find other cool games and giveaways!",
      technologies: [
        "JavaScript, CSS, HTML, ServerSideAPI, fetch API, AJAX, jQuery, Bootstrap, moment.js, template literals, JSON, git workflow, ZenHub",
      ],
      github: "https://github.com/HacAtac/Game-Suggestion-App",
      deployed: "https://game-suggestion-app.herokuapp.com/",
    },
    {
      name: "API for a Social Media App",
      image: "https://i.imgur.com/qQqQQQQ.png",
      description: "API for a Social Media App",
      technologies: [
        "JavaScript, CSS, HTML, Node, Express, mongoDB, mongoose, bcrypt, sessions, handlebars, Heroku",
      ],
      github: "https://github.com/hacatac/hacSocialize",
      deployed: "https://hacSocialize.herokuapp.com/",
    },
  ];
}
