function renderLicenseBadge(license) {
    let badge = "";
    if (data.license == "MIT") {
        badge = "![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)"
    } else if (data.license == "APACHE 2.0") {
        badge = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
    } else if (data.license == "GPL 3.0") {
        badge = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
    } else if (data.license == "BSD 3") {
        badge = "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)"
    }
}

function generateMarkdown(data) {
    return `${data.title}

    
## Table of Contents:
* [Installation](#installation)
* [Description](#description)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contribute)
* [Tests](#tests)
* [Questions](#questions)
  
## Description

${data.description}

## Installation: 
To install necessary dependecies, open console and run the following:

${data.installations}

## Usage:

${data.usage}

## License:
This is licensed under: 

${data.license}

## Contributors:

${data.contribute}

## Tests:
In order to test, open console and run the following: 

${data.tests}


## Question:
If you have any questions contact me on [GitHub](${data.GitHub}) or contact 
${data.author} at ${data.email} 


`
}

module.exports = generateMarkdown;