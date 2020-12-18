// require the necessary dependencies like inquirer which will take user input
const inquirer = require('inquirer');
// fs for writing the readme file
const fs = require('fs');

//defining the readme file using template literal string
function makeReadme(inputs) {
    return `![badge](https://img.shields.io/badge/license-${inputs.license}-brightgreen)

# ${inputs.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [Testing](#testing)
- [License](#license)
- [Contact](#contact)

## Description:
    ${inputs.description}

## Installation:
    ${inputs.installation}

## Usage:
    ${inputs.usage}

## Contributors:
    ${inputs.contribution}

## Testing:
    ${inputs.testinstruction}

## License:
    ${inputs.license}

## Contact:
    [Github Profile](https://github.com/${inputs.githubname})
    Email: ${inputs.email}`;
}

//using inquirer to ask questions at the command line for inputs to readme file
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project: ',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions for a user of your project: ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information about your project: ',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter contributors to your project: ',
    },
    {
        type: 'input',
        name: 'testinstruction',
        message: 'Enter instructions for testing your project: ',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select the appropriate license of your project: ',
        choices: [
            'Apache',
            'Boost',
            'BSD',
            'CC',
            'Eclipse',
            'GNU',
            'IBM',
            'ISC',
            'MIT',
            'Mozilla',
            'Perl',
            'SIL'
        ]
    },
    {
        type: 'input',
        name: 'githubname',
        message: 'Enter your GitHub username: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email by which people can contact you: ',
    },
])
.then((data) => {
    const filename = 'readme-output/README.md'
    fs.writeFile(filename, makeReadme(data), (err) =>
        err ? console.log(err) : console.log('README.md created! Can be found in the local folder readme-output')
    );
});