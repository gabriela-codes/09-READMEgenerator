function generateMarkdown(data) {
  return `# ${data.title}
${licenseBadge(data.license)}

## Description

${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)
${licenseLink(data.license)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation
Follow instructions to install project
\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

${licenseSection(data.license)}
  
## Contributing
${data.contributing}

## Tests
Follow instructions to test project
\`\`\`
${data.test}
\`\`\`

## Questions
Contact me at ${data.email} or find me on github ${data.github} for any questions
`;
}

function licenseBadge(license) {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`

}

function licenseLink(license) {
    return (
      `\n* [License](#license)\n`
    )
}

    function licenseSection(license) {
    return (
      `## License 
      This project is licensed under the ${license} license.`
    )
}

module.exports = generateMarkdown;
