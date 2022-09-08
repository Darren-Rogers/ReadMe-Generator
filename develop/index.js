// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
// const prompt = inquirer.createPromptModule();
function init() {
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
        type: 'input',
        name: 'License',
        message: 'What license would you like to use for this ReadMe',
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
    ]).then((answers) => {
        const template = `
        #${Title},
        ## Table of Contents
        *[Description](#Description)
        *[Installation](#Installation)
        *[Usage](#Usage)
        *[Liscence](#Liscence)
        *[Contributing](#Contributing)
        *[Tests](#Tests)
        ##${Description},
        ##${Installation},
        ##${Usage},
        ##${Liscence},
        ##${Contributing},
        ##${Tests}
      `
      

      // console.log(answers) 
    })
}

// Function call to initialize app
init();