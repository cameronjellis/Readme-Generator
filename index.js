// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// const licenseBadge = require("./utils/licenseSection.js");
const writeToFile = require("./utils/templateLit.js");

// const generateMd = require("./utils/generateMarkdown.js");
// console.log(generateMd);
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
    message: "What was this project published?",
    name: "year",
  },
];

// TODO: Create a function to write README file
// create my template literal (whole readme file)

//for adding black background to code snippets in readme
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    // console.log(data);
    // generateMarkdown(data);
    fs.writeFile("README.md", writeToFile(data), (err) => {
      err ? console.log(err) : console.log("Readme.md file is ready!");
    });
    // console.log(data.title);
  });
}

// Function call to initialize app
init();
