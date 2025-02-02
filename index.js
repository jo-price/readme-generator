// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs';
import generateMarkdown from "./utils/generateMarkdown";

// TODO: Create an array of questions for user input
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
    },
    {
        type: 'rawlist',
        name: 'license',
        message: 'What type of license is this project under?',
        choices: ['MIT', 'no license'],
    }
    ])

//function ask() {
//    inquirer.prompt(questions).then(answers) = 
//        console.log(answers.title);
//        console.log(answers.description);
//        console.log(answers.installation);
//        console.log(answers.usage);
//        console.log(answers.contributing);
//        console.log(answers.tests);
//    };

//const questions = ['title', 'description', 'installation', 'usage', 'contributing', 'tests'];
//const [ title, description, installation, usage, contributing, tests ] = questions;
//{
//    questions.forEach((questions) => console.log(questions.responses));
//};

// TODO: Create a function to write README file
.then((data) => {
    const filename = `${data.title.toLowerCase().split(' ').join('')}README.md`;

//function writeToFile = (fileName, data) => {
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
        err ? console.error(err) : console.log('Readme successfully created!')
    );
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

