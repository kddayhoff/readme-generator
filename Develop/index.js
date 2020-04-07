
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require('axios');
require('dotenv').config();
// const api = require("./api.js");

function questions() {
    return inquirer.prompt([
      {
          type: "input",
          name: "Project Title",
          message: "What is the title of the project?"
      },
      {
        type: "input",
        name: "Project Description",
        message: "What is the description of the project?"
      },
    //   {
    //     type: "list",
    //     name: "Table of Contents",
    //     message: "List the table of Contents"
    //   },
      {
        type: "input",
        name: "Installation",
        message: "How does someone install the project?"
      },
      {
        type: "input",
        name: "Usage",
        message: "How does a user use the project?"
      },
      {
        type: "input",
        name: "Authors",
        message: "Who contributed to the project and are there any acknowledgments?"
      },

    //   {
    //     type: "checkbox",
    //     name: "License",
    //     message: "What is the license for the project?"
    //   },
      {
        type: "input",
        name: "Contributors",
        message: "Who contributed to this project?"
      },
      {
        type: "input",
        name: "Contributing",
        message: "Are you open to contributions and what are the requirements for accepting them?"
      },
      {
        type: "input",
        name: "Tests",
        message: "What are the instructions for running the tests for this project?"
      },
      {
        type: "input",
        name: "Name",
        message: "What is your full name?"
      },
      {
        type: "input",
        name: "Contact or Questions",
        message: "What is your LinkedIn profile?"
      },
      {
        type: "input",
        name: "username",
        message: "What is your GitHub username",
        
      }
    ])
    .then(function(answers) {
        let username = answers.username;
    getUser(username, answers);
    });
      
    
   
        function getUser(username) {
      axios
      .get(`https://api.github.com/users/${username}`, 
      {
        headers: {"Authorization": `${process.env.GH_TOKEN}`}
      })
        .then(function(res) {
          console.log(res.data)
           
          }) 
          .catch(error => console.log(error))
      }}
      
      questions(); 
       
      // Type: (input === "GET")
      // Message asks th qustion
      // name is the response (user input)
        // take the reaponse in our case "useranem" throw it into our API call
      
        // passing in the "username" (answer from last question) and running API
      
    
    
    
    
    
    
    // function writeToFile(fileName, data) {
    //     const answers = questions.filter(function(info) {
    //         return answers.input;
    //     })
    //     }
    //  }

    //  writeToFile();
        
   
    //  fs.appendFile("log.txt", )
    // axios
    // .then(function({ username }) {
     
    //     const queryURL = (`https://api.github.com/users/${username}`, 
    //     {
    //       headers: {"Authorization": `${process.env.GH_TOKEN}`}
    //     })
      
    //     .get(queryURL)
    //     .then(function(res) {
    //         console.log(res.data.map());
           
    //         })
    //          .catch(function(error) {
    //              console.log("Error: ", error)
    //          })
    //         })  
     
    //     }
 
 
//  username("kddayhoff"); 


// function init() {

// }

// init();
