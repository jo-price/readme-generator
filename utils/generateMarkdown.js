export default generateMarkdown;
export default path;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license); {
  function renderLicenseBadge(license) {
    if (license !== "none") {
      return `![Github license](https://img.shields.io/badge/license-${license.choices}-blue.svg)`;
    }
    return "";
  }
//}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license); {

//}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license); {

//}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `#${data.title}\t
  #${data.description}\t
  #${data.installation}\t
  #${data.usage}\t
  #${data.contributing}\t
  #${data.tests}\t
  #${data.license}\t
`;
}


