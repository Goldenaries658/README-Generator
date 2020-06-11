const inquirer = require('inquirer');
const colors = require('colors');

const writeToFile = require('./utils/writeToFile');
const printHeader = require('./utils/printHeader');

// Array of question to ask user
const questions = [
  {
    name: 'title',
    message: 'Enter project title:'.magenta.bold,
  },
  {
    name: 'description',
    message: 'Enter project description:'.magenta.bold,
  },
  {
    name: 'installation',
    message: 'Enter project installation instructions:'.magenta.bold,
  },
  {
    name: 'usage',
    message: 'Provide instructions and examples for use:'.magenta.bold,
  },
  {
    name: 'contributing',
    message: 'Enter in guidelines for contributing:'.magenta.bold,
  },
  {
    name: 'tests',
    message: 'Enter detail of any test packages in the project:'.magenta.bold,
  },
  {
    name: 'github',
    message: 'Enter GitHub username:'.magenta.bold,
  },
];

const init = async () => {
  printHeader();
  console.log('Welcome to the README Generator!'.magenta.bold);
  try {
    const data = await inquirer.prompt(questions);
    writeToFile(data);
  } catch (err) {
    console.error(err);
  }
};

init();
