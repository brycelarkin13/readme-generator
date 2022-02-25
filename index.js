// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generatePage = require('./Readme generator/utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
           type: 'input',
           name: 'projectName',
           message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a description of your project:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Installation guidelines:',
        },
        {
            type:   'input',
            name:   'usage',
            message:    'Provide instructions on how to use:',
        },
        {
            type:   'input',
            name:   'credits',
            message:    'List any collaborators, if any, with links to their GitHub profile.'
        },
        {
            type: 'input',
            name: 'contributers',
            message: 'If you would like other developers to contribute,include guidelines for how to do so:'
        },
        {
            type: 'checkbox',
            name:   'licenses',
            message:    'Select a license usage:',
            choices:    ['Rust', 'npm packages', 'Opensource', 'MIT', 'GNU', 'Apache'],
        },
        {
            type: 'input',
            name:   'username',
            message:    'Input your GitHub username:'
        },
        {
            type:   'input',
            name:   'email',
            message:    'Enter your email address to answer any questions:',
        }
    ]);
};

// TODO: Create a function to write README file
const writeFile = data => {
    fs.writeFile('./dist/README.md', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the README has been created 
        } else {
            console.log("Your README has been successfully created, check the dist folder to see it!")
        }
    })
}; 

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
promptUser()
 .then(response => {
     return generatePage(response);
 })
 .then(data => {
     return writeFile(data);
 })
 .catch(err => {
     console.log(err);
 });