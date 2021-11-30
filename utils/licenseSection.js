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

const licenseSection = function renderLicenseSection(data) {
  return `This project is licensed under the ${data.license} license. (c) ${data.year}`;
};

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
//   console.log(data.email);
// }

module.exports = licenseSection;
// module.exports = licenseBadge;
