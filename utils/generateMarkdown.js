function generateMarkdown(projectName, data, githubData) {
  return `
<h1 align="center">${projectName}</div>

<div align="center">
  <img src="https://img.shields.io/github/license/${data.github}/${projectName}" alt="License Badge" />
  <img src="https://img.shields.io/github/issues/${data.github}/Readme-generator" alt="Issues Badge"/>
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

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For any questions, my name is ${githubData.name} I am available at:  

[${githubData.login}](${html_url})  
${githubData.email}  
![Avatar](${githubData.avatar_url})

`;
}

module.exports = generateMarkdown;
