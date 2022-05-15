// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)


  ## Description
  ${data.description}

  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  This project is licensed under ${data.license}

  ## Contributing
  ${data.contribution}

  ## Tests 
  ${data.test}

  ## Questions 
  If you have any questions reagarding this project, please contact me at ${data.email} or view the GitHub link at ${data.Github}
`;
}

module.exports = generateMarkdown;
