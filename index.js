const generateMarkdown = require("./generateMarkdown");
const inquirer = require('inquirer');
const fs = require('fs');

let questions = [
    {
        type: "input",
        message: "What is the title of your repository?",
        name: "title"

    }, {
        type: "input",
        message: "Please describe the repository.",
        name: "description"

    }, {
        type: "input",
        message: "What command should run to install dependencies",
        name: "installations"

    },{
        type: "input",
        message: "What command should run tests",
        name: "tests"

    },  {
        type: "input",
        message: "What is your GitHub user name?",
        name: "userName"

    }, {
        type: "input",
        message: "What is the Authors name?",
        name: "author"

    },{
        type: "input",
        message: "Please give your GitHub profile link.",
        name: "GitHub"

    }, {
        type: "input",
        message: "What is your email?",
        name: "email"

    }, {
        type: "list",
        name: "license",
        message: "Please select which license you would like to use.",
        choices: [
            "APACHE 2.O",
            "BSD 3",
            "GVL-GPL 3.0",
            "MIT",
            "None"
        ],

    }, {

        type: "input",
        name: "usage",
        message: "What do users need to know about using this repo"

    }, {
        type: "input",
        message: "Please state if others have contributed.",
        name: "contribute"
    }
];

inquirer.prompt(questions).then(function(data) {
    console.log(data);
    
     let content = generateMarkdown(data);
     console.log(content);
      fs.writeFile("./ReadMe.md", content, function(err){
          if (err) throw err
          console.log("success!");
      });
 } );