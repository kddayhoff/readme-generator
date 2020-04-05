
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

function questions() {
    return inquirer.prompt([
      {
          type: "input",
          name: "projectTitle",
          message: "What is the title of the project?"
      },
      {
        type: "input",
        name: "description",
        message: "What is the description of the project?"
      },
      {
        type: "input",
        name: "tableOfContents",
        message: "List the table of Contents"
      },
      {
        type: "input",
        name: "intallation",
        message: "How does someone install the project?"
      },
      {
        type: "input",
        name: "usage",
        message: "How does a user use the project?"
      },
      {
        type: "input",
        name: "authors",
        message: "Who contributed to the project and are there any acknowledgments?"
      },

      {
        type: "input",
        name: "license",
        message: "What is the license of the project?"
      },
      {
        type: "input",
        name: "contributing",
        message: "Are you open to contributions and what are the requirements for accepting them?"
      },
      {
        type: "input",
        name: "tests",
        message: "What are the instructions for running the tests for this project?"
      },
      {
        type: "input",
        name: "username",
        message: "Enter your GitHub username"
      },

    ]
    )}
    questions();
function writeToFile(fileName, data) {
}

function init() {

}

init();
