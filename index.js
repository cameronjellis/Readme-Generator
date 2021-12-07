// Modules being required in to be used in this file.

const fs = require("fs");
const inquirer = require("inquirer");
const writeToFile = require("./utils/templateLit.js");

// Array of objects to be called with inquirer.

const questions = [
  {
    type: "input",
    message: "What is your Github username?",
    name: "gitHub",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Write a short description of this project.",
    name: "description",
  },
  {
    type: "list",
    message: "What license should your project to be licensed under?",
    choices: ["MIT", "APACHE", "GPL", "BSD", "Other"],
    name: "license",
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "install",
  },
  {
    type: "input",
    message: "What command should be run to test this application?",
    name: "test",
  },
  {
    type: "input",
    message: "What how does the user invoke this application?",
    name: "usage",
  },
  {
    type: "input",
    message: "What are the contribution guidlines for this repo?",
    name: "contribution",
  },
  {
    type: "input",
    message: "What is the deployed website url for this project?",
    name: "deployed",
  },
  {
    type: "input",
    message:
      "What is the reletive path to the screenshot you would like to include in your README.md file?",
    name: "screenshot",
  },
  {
    type: "input",
    message: "What year was this project published?",
    name: "year",
  },
];

// Function that handles asking the questions and calling and external method passing in 'data'.

function init() {
  inquirer.prompt(questions).then((data) => {
    fs.writeFile("./exports/README.md", writeToFile(data), (err) => {
      err ? console.log(err) : console.log("Readme.md file is ready!");
    });
  });
}

// Function call to initialize app
init();

// relative image path for screenshot section
// ./images/readme-generator-screenshot.png

// Link to the Walkthrough video
// https://drive.google.com/file/d/15SKQP0-SF3Uxh_FOsyl49UX2kiPSnRmk/view
