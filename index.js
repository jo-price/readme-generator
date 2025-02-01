// TODO: Include packages needed for this application
import inquirer from "inquirer";

inquirer
    .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of the project.',
    } ,
    {
        type: 'input',
    }
    ])

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
