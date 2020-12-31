function generateMarkdown(data, answers) {
  return `
   
  ### Project Title: ${ answers.title }
  ____
  #### Table of Contents:
  ##### 1. Project Description
  ##### 2. Installation
  ##### 3. Usage
  ##### 5. Authors
  ##### 6. License
  ##### 7. Tests
  ##### 8. Contact Information
  _____
  #### Project Description
   ${ answers.description }
  ____
  #### Installation
  ${ answers.installation}
  ____
  #### Usage
  ${answers.usage}
  ____ 
  #### Authors
  ${answers.authors}
  ____
  #### License
  ${answers.license} ![badge](https://img.shields.io/static/v1?label=License&message=MIT&color=)
  ____
  #### Tests
  ${answers.tests}
  ____
  #### Name
  ${answers.name}
  #### Contact
  
       *LinkedIn: https://www.linkedin.com/in/${answers.linkedin}
       *Email: ${data.email}
       *Github: ${answers.username}

  
     ![avatar](${data.avatar_url})
  
  `;
}

module.exports = generateMarkdown;
