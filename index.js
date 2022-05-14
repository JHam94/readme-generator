// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./Develop/utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please provide a project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a description of your project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!');
                } return false;
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide information needed to install project',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please provide installation instructions!');
                } return false;
            }
        },
        {
            type: 'input',
            name: 'use',
            message: 'How do you use this project? (Required)',
            validate: useInput => {
                if (useInput) {
                    return true;
                } else {
                    console.log('Please describe how to use this project!');
                } return false;
            }
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'What kind of license(s) does this project have? (Check all that apply)',
            choices: ['MIT', 'GPLv2', 'Apache 2.0', 'ISC']
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please provide information for contributing to your project',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Please enter any questions you have regarding the project'
        },
        {
            type: 'input',
            name: 'Github',
            message: 'Please enter your GitHub username (Required)',
            validate: GithubInput => {
                if (GithubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                } return false;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                } return false;
            }
        }
    ]);
};


// TODO: Create a function to write README file
const writeToFile = readme => {
    fs.writeFile('README.md', readme, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("README file successfully created!")
        }
    })
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
