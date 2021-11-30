// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMd = require("./utils/generateMarkdown");
console.log(generateMd);
// TODO: Create an array of questions for user input
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
    message: "Write a short description of this project?",
    name: "description",
  },
  {
    type: "list",
    message: "What license should your project to be licensed under?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
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
    message:
      "What additional information should a user know abnout using this repo?",
    name: "usage",
  },
  {
    type: "input",
    message: "What should a user know about contributing to this repo?",
    name: "contribution",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions);
}

// Function call to initialize app
init();
