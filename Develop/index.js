// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generateMarkdown.js');

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
            message: 'Please write a description of your project'
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
            message: 'How do you use this project?'
        },
        {
            type: 'input',
            name: 'licenses',
            message: 'What kind of license(s) does this project have?'
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
        }
    ]);
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
