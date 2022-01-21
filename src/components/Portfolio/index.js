import React from "react";
import awsome from "../../assets/images/awsome.png";
import game from "../../assets/images/game.png";
import mongoAPI from "../../assets/images/mongoAPI.png";
import WMS from "../../assets/images/WMS.png";
// import ecommerce from "../../assets/images/ecommerce.png";
import budget from "../../assets/images/budget.png";
import screenshot from "../../assets/images/screenshot.PNG";

export default function Portfolio() {
  //here were going to make a an array of objects that will be used to display the portfolio
  //we're going to use the map function to loop through the array and return a div for each object
  //we're going to use the object's name as the key and the object's image as the value
  const projects = [
    {
      name: "AWSOME",
      image: awsome,
      techtitle: "Tech Used:",
      description: "FullStack App made for a client",
      technologies: [
        "Node, Express, mySQL, sequelize, bcrypt, sessions, handlebars, Heroku",
      ],
      github: "https://github.com/osbym/awsome-organics-gp2",
      deployed: "https://awsomeorganics.herokuapp.com/",
      id: "1",
    },
    {
      name: "Game Suggestion App ",
      image: game,
      techtitle: "Tech Used:",
      description:
        "Colaborative app that uses Open Source API's to find their next game + game giveaways!",
      technologies: [
        "JS, Bulma, ServerSideAPI, AJAX, jQuery, moment.js, template literals, JSON, git workflow, ZenHub",
      ],
      github: "https://github.com/HacAtac/videogame-recommender",
      deployed: "https://osbym.github.io/videogame-recommender/",
      id: "2",
    },
    {
      name: "API for a Social Media App",
      image: mongoAPI,
      techtitle: "Tech Used:",
      description:
        "Backend CRUD API that utilizes sub documents, .populate(), .virtuals()",
      technologies: [
        "JavaScript, Node, Express, mongoDB, mongoose, Insomnia, JSON, Heroku, MVC architecture",
      ],
      github: "https://github.com/HacAtac/hacSocializeApi",
      deployed: "https://watch.screencastify.com/v/zXc3jY3S0y3Hv9QVfF1Y",
      id: "3",
    },
    {
      name: "Workforce Management System",
      image: WMS,
      techtitle: "Tech Used:",
      description:
        "Backend CMS that allows for companies to create, update, and delete their own information",
      technologies: [
        "JavaScript,  Node, Express, mySql, inquirer, console.table, Insomnia, JSON, ScreenCastify, MVC architecture",
      ],
      github: "https://github.com/HacAtac/hacEmployeeTracker",
      deployed: "https://watch.screencastify.com/v/qRwBBmEJYXPRyPfbVsKU",
      id: "4",
    },
    {
      name: "GTX-Mobile-Detailing",
      image: screenshot,
      techtitle: "Tech Used:",
      description:
        "MERN stack app to help a client manage his services and bookings",
      technologies: [
        "MongoDB, Mongoose, Express, GraphQL, Apollo, React, Node, Heroku, MVC architecture",
      ],
      github: "https://github.com/HacAtac/gtx-mobile-detailing",
      deployed: "https://gtxdetailing.herokuapp.com/",
      id: "5",
    },
    // {
    //   name: "API for eCommerce App",
    //   image: ecommerce,
    //   techtitle: "Tech Used:",
    //   description:
    //     "Backend ORM API for eCommerce App that utilized CRUD methods to create, read, update, and delete data",
    //   technologies: [
    //     "JavaScript, Node, Express, sequelize, mySQL, dotenv, Insomnia, JSON, ScreenCastify, MVC architecture, object-oriented programming",
    //   ],
    //   github: "https://github.com/HacAtac/hac_E_Com_Backend",
    //   deployed: "https://watch.screencastify.com/v/O1F3wd32RmvhSpObnl4V",
    //   id: "5",
    // },
    {
      name: "Budget Tracker PWA",
      image: budget,
      techtitle: "Tech Used:",
      description:
        "PWA that allows users to track their budget even offline, and uploads it to a database once connected",
      technologies: [
        "mongoDB, mongoose, express, indexedDB, service-workers, web-manifest, PWA, JS, CSS, Heroku ",
      ],
      github: "https://github.com/HacAtac/hacBudgetTracPWA",
      deployed: "https://hacbudget.herokuapp.com/",
      id: "6",
    },
  ];

  //6 cards that utilize flex and .map to show projects 2x3
  //that display the project name, image, description, technologies, github, and deployed link
  //that have media queries to show the project name, image, description, technologies, github, and deployed link
  //in a different size depending on the screen size
  return (
    <div>
      <h1 id="state-title" className="Portfolio Projects">
        {" "}
        My Work
      </h1>
      <div className="flex flex-wrap justify-center">
        {projects.map((project) => (
          <div
            id="animate-card"
            className="w-full md:w-1/2 lg:w-1/3 p-4 skew-y-12 "
            key={project.id}
          >
            <div className="bg-grey border-2 border-gray-400 rounded-lg shadow-lg p-4 ">
              <h2 id="card-title" className="text-2xl font-bold text-center">
                {project.name}
              </h2>
              <img
                id="card-image"
                className="w-full"
                src={project.image}
                alt={project.name}
                style={{ maxHeight: "200px" }}
              />
              <p className="text-center">{project.description}</p>
              <h4 className="text-center" id="tech-title">
                {project.techtitle}
              </h4>
              <p className="text-center">{project.technologies}</p>
              <div className="flex justify-center">
                <a
                  id="github-link"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" font-bold py-2 px-4 rounded-full"
                >
                  Github
                </a>
                <a
                  id="deployed-link"
                  href={project.deployed}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold py-2 px-4 rounded-full ml-4"
                >
                  Deployed
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// return (
//   <div className="container">
//     <h1 className="Portfolio Projects"> Portfolio Projects</h1>

//     <div className="flex flex-wrap justify-around">
//       {projects.map((project) => (
//         <div className="card">
//           <img
//             src={project.image}
//             className="card-img-top"
//             alt={project.name}
//           />
//           <div className="card-body">
//             <h5 className="card-title">{project.name}</h5>
//             <p className="card-text">{project.description}</p>
//             <a href={project.github} className="btn btn-primary">
//               <img
//                 src="https://img.icons8.com/color/48/000000/github.png"
//                 alt="github"
//               />
//             </a>
//             <a href={project.deployed} className="btn btn-primary">
//               Deployed App
//             </a>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );
//}
