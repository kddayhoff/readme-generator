//OAuth2 token for github API; avatar URl is profile pic -- go to axios user instructions on npmjs to put in header for api token generated from git hub

const axios = require('axios');

const api = {
  getUser(username) {
axios
.get(`https://api.github.com/users/${username}`, 
{
  headers: {"Authorization": `${process.env.GH_TOKEN}`}
})
  .then(function(res) {
    console.log(res)
     
    })
     
    .catch(error => console.log(error))
 
}
}

api.getUser();

module.exports = api;


//package dotenv -- in dot env folder name pairs GH_TOKEN example
//installation directions need to say clone it, npm install, create .env file, create it in this way in this file
//put .env file in the root with index (NOT utils)
//link it into index.js to run it
