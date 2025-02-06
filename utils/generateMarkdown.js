// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
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
Licensed under the ${data.license} License.
## Questions
For any questions, reach out via [email](mailto:${data.email}) or visit on [GitHub](https://github.com/${data.username}).`
}

export default generateMarkdown;