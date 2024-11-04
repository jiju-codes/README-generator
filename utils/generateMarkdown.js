// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license === "GPLv3") {
    return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  } else if (license === "Apache 2.0") {
    return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
  } else if (license === "none" || license === "add manually") {
    return "";
  } else {
    return "";
  }
}

// Function that returns the license link
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "GPLv3") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  } else if (license === "Apache 2.0") {
    return "https://www.apache.org/licenses/LICENSE-2.0";
  } else if (license === "none" || license === "add manually") {
    return "";
  } else {
    return "";
  }
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  if (license === "MIT") {
    return "This project is licensed under the MIT license.";
  } else if (license === "GPLv3") {
    return "This project is licensed under the GPLv3 license.";
  } else if (license === "Apache 2.0") {
    return "This project is licensed under the Apache 2.0 license.";
  } else if (license === "none") {
    return "This project does not have a license.";
  } else if (license === "add manually") {
    return "Enter license information here.";
  } else {
    return "";
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, please open an issue or contact me at ${data.email} 
You can find more of my work at [${data.github}](https://github.com/${
    data.github
  }).`;
}

export default generateMarkdown;
