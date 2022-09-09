// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input
// const questions = [];

const badges = [`[![license:MIT](https://img.shields.io/badge/license-mit-green.svg)](https://opensource.org/licenses/MIT)`,
  `[![license:BSD](https://img.shields.io/badge/license-BSD-green.svg)](https://opensource.org/licenses/BSD-2-Clause)`,
  `[![license:Apache](https://img.shields.io/badge/license-Apache-green.svg)](https://opensource.org/licenses/Apache-2.0)`];
const [MIT, Apache, BSD] = badges

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
// const prompt = inquirer.createPromptModule();
function init(answers) {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'Title',
        message: 'Give your ReadME a title',
      },
      {
        type: 'input',
        name: 'Description',
        message: 'Give your application a descrition',
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'How is this application installed',
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'What is the usage for this application',
      },
      {
        type: 'list',
        name: 'License',
        message: 'What license would you like to use for this ReadMe',
        choices: [MIT, Apache, BSD]
      },
      {
        type: 'input',
        name: 'Contributing',
        message: 'Please list the contributors',
      },
      {
        type: 'input',
        name: 'Tests',
        message: 'What are the testing instructions',
      },
      {
        type: 'input',
        name: 'Questions',
        message: 'Enter your Github username',
      },
    ]).then((answers) => {
      const template = `
# ${answers.Title}
## Table of Contents 
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Liscence](#Liscence)
* [Contributing](#Contributing)
* [Tests](#Tests)

## Description

${answers.Description}

## Installtion

${answers.Installation}

## Usage

${answers.Usage}

## License

${answers.License}

## Contributing

${answers.Contributing}

## Tests

${answers.Tests}

## Questions
Contact ${answers.Questions} with any questions
      `
      console.log(template)

      // console.log(answers) 
      if (fs.existsSync('utils')) {
        fs.writeFileSync('utils/README.md', template)
      } else {
        fs.mkdirSync('utils', template)
        fs.writeFileSync('utils/README.md', template)

      }
    })
}

// Function call to initialize app
init();