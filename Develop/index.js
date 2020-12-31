
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require('axios');
require('dotenv').config();
const generateMarkdown = require("./Future Develop/generateMarkdown")


//questions the user will be asked to complete information in ReadME
function questions() {
     inquirer.prompt([
      {
          type: "input",
          name: "title",
          message: "What is the title of the project?"
      },
      {
        type: "input",
        name: "description",
        message: "What is the description of the project?"
      },
      {
        type: "input",
        name: "installation",
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
        message: "What is the license for the project?"
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
        name: "name",
        message: "What is your full name?"
      },
      {
        type: "input",
        name: "linkedin",
        message: "What is your LinkedIn profile name?"
      },
      {
        type: "input",
        name: "username",
        message: "What is your GitHub username",  
      }
    ])

    //this takes the user's github name and pulls up their github user provile
    .then(function(answers) {
        let username = answers.username;
    getUser(username, answers);
    
    });
      
    //this function calls the github API
        function getUser(username, answers) {
      axios
      .get(`https://api.github.com/users/${username}`, 
      {
        headers: {"Authorization": `token ${process.env.GH_TOKEN}`}
      })
        .then(function(res) {
            const data = res.data
            // console.log(data);
            // console.log(data.email);
          generateReadme(data, answers);
          }) 
          .catch(error => console.log(error))
      }}
    
    function generateReadme (data, answers) {
      
    fs.writeFileSync("README.md", generateMarkdown(data, answers), function(err) {
        if (err) {
        return console.log(err);
        }
        console.log("Success!");
        });
    }

   questions();
      
     
      