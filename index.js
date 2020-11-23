const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter project title"
  },
  {
    type: "input",
    name: "description",
    message: "Enter project description"
  },
  {
    type: "input",
    name: "installation",
    message: "Enter install instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage instructions",
  },
  {
    type: "list",
    name: "license",
    message: "Enter project license",
    choices: [
      "MIT", 
      "APACHE 2.0", 
      "GPL 3.0", 
      "BSD 3"
    ]
  },
  {
    type: "input",
    name: "contributing",
    message: "Enter contribution guidelines",
  },
  {
    type: "input",
    name: "test",
    message: "Enter testing instructions",
  },
  {
    type: "input",
    name: "github",
    message: "Enter GitHub username"
  },
  {
    type: "input",
    name: "email",
    message: "Enter email address"
  },
];

function writeToFile(fileName, data) {
  var file = path.join(process.cwd(), fileName)
  return fs.writeFileSync(file, data);
}

function init() {
  inquirer.prompt(questions)
  .then((userResp) => {
    writeToFile("README.md", generateMarkdown(userResp));
  })
}

init();
