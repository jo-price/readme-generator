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
        name: 'description',
        message: 'Enter the project description.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions.',
    }
    ])

// TODO: Create an array of questions for user input
const questions = ['title', 'description', 'description', 'installation', 'usage', 'contributing', 'tests'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
