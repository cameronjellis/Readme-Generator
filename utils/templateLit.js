// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// function renderLicenseBadge(license) {}

// const licenseBadge = function renderLicenseBadge(data) {
//   return `https://img.shields.io/badge/${data.license}-license-blue`;
// };

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// const licenseSection = function renderLicenseSection(data) {
//   return;
// };

function writeToFile(data) {
  console.log(data);
  return `![${data.license} license](https://img.shields.io/badge/${
    data.license
  }-license-blue)
# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contributing](#contributing)
- [License](#license)
- [Link](#link)
- [Screenshot](#screenshot)
- [Questions](#questions)

## Installation

${"    " + data.install}

## Usage

${data.usage}

## Tests

${data.test}

## Contributing

${data.contribution}

## License

This project is licensed under the ${data.license} license. (c) ${data.year}

## Link

${data.deployed}

## Screenshot

![${data.title}](${data.screenshot})

## Questions

#### If you have questions or would like to contact me for more information, you can find me on Git Hub or send me and email.

- https://github.com/${data.gitHub}
- ${data.email}`;
}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
//   console.log(data.email);
// }

module.exports = writeToFile;

// module.exports = licenseBadge;
