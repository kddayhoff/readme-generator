
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require('axios');
require('dotenv').config();
const writeFileAsync = util.promisify(fs.writeFile);

//questions the user will be asked to complete information in ReadME
function questions() {
    return inquirer.prompt([
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
        name: "contributors",
        message: "Who contributed to this project?"
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
        name: "contact",
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
        function getUser(username) {
      axios
      .get(`https://api.github.com/users/${username}`, 
      {
        headers: {"Authorization": `${process.env.GH_TOKEN}`}
      })
        .then(function(res) {
          console.log(res.data)
          console.log("==========");
          var userEmail = res.data.email;
          console.log(userEmail);
          console.log("===========");
          var userPicture = res.data.avatar_url;
          console.log(userPicture);
          console.log("============");
           return userEmail;
          }) 
          .catch(error => console.log(error))
      }}
    
    function generateReadme (input) {
        return `
     ###hello
     ![badges]()  
     ![avatar](https://avatars1.githubusercontent.com/u/${ input.userPicture }?v=4   
    ### 
    Project Title: ${ input.title }
    ___
    ####
    Project Description: ${ input.description }
    `
    }

    async function init() {
        console.log("hi")
        try {
          const input = questions();
      
          const readMe = generateReadme(input);
      
          await writeFileAsync("README.md", readMe );
      
        } catch(err) {
          console.log(err);
        }
      }
      
      init();
      
     
      