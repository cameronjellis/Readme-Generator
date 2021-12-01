//Function to create the whole template literal for the readme file. Passing in 'data' from inquirer.prompt

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

//functions that are being exported to be used in index.js

module.exports = writeToFile;
