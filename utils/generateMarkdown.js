function generateMarkdown(projectName, data) {
  return `
<h1 align="center">${projectName}</div>

<div align="center">
  <img src="https://img.shields.io/github/license/${data.username}/${repoName}" alt="License Badge" />
  <img src="https://img.shields.io/github/issues/goldenaries658/Readme-generator" alt="Issues Badge"/>
</div>

## Description

${data.description}

## Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Licence

${data.licence}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

${data.questions}


`;
}

module.exports = generateMarkdown;
