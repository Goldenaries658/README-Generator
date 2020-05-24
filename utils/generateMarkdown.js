function generateMarkdown(data) {
  return `
# ${data.title}

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
