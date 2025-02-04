// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== "none") {
      return `![Github license](https://img.shields.io/badge/license-${data.license}-blue.svg)`;
    }
    return "";
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license); {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license); {
//  if (license !== "none") {
//    return `Licensed under the ${data.license} License.`;
//  }
//  return "";}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `#${data.title}
## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Testing](#testing)
* [License](#license)
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## Contributors
${data.contributing}
## Testing
${data.tests}
## License
${renderLicenseSection(data.license)}
## Questions
For any questions, reach out to me via [email](mailto:${data.email}?subject=[README generator]) or visit [github/${data.userame}](https://github.com/${data.username}).
`;
}

export default generateMarkdown;
