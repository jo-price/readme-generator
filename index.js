// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
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
        choices: ['MIT', 'APACHE2.0', 'Boost1.0', 'MPL2.0', 'BSD2', 'BSD3'],
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.',
    },
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    const genMd = generateMarkdown(data);
    fs.writeFileSync(fileName, genMd);
    }

// TODO: Create a function to initialize app
 function init(questions) {
  inquirer.prompt(questions).then((answers)  => {
    writeToFile("./dist/README.md", answers);
    console.log('README sucessfully created! Check "dist" folder.');
   ;
  });
 }

  init(questions);
