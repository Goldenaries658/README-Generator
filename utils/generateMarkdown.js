function generateMarkdown(data) {
  return `
<h1 align="center">${data.title}</div>

<div align="center">
  <img src="https://img.shields.io/npm/l/m?style=plastic" alt="License Badge" />
  <img src="https://img.shields.io/github/issues/goldenaries658/Readme-generator" alt="Issues Badge"/>
</div>
<div align="center">
  <img src="https://img.shields.io/github/package-json/dependency-version/goldenaries658/README-Generator/inquirer" alt="Inquirer Version Badge"/>
  <img src="https://img.shields.io/github/package-json/dependency-version/goldenaries658/readme-generator/axios" alt="Axios Version Badge"  />
  <img src="https://img.shields.io/github/package-json/dependency-version/goldenaries658/readme-generator/colors" alt="Colors Version Badge"  />
  <img src="https://img.shields.io/github/package-json/dependency-version/goldenaries658/readme-generator/dotenv" alt="Dotenv Version Badge"  />
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
