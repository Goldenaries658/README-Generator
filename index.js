const inquirer = require('inquirer');
const colors = require('colors');

const writeToFile = require('./utils/writeToFile');
const printHeader = require('./utils/printHeader');
const { emptyInputCheck } = require('./utils/inputValidators');

// Array of question to ask user
const questions = [
  {
    name: 'title',
    message: 'Enter project title:'.magenta.bold,
    validate: emptyInputCheck,
  },
  {
    name: 'description',
    message: 'Enter project description:'.magenta.bold,
    validate: emptyInputCheck,
  },
  {
    name: 'installation',
    message: 'Enter project installation instructions:'.magenta.bold,
    validate: emptyInputCheck,
  },
  {
    name: 'usage',
    message: 'Provide instructions and examples for use:'.magenta.bold,
    validate: emptyInputCheck,
  },
  {
    name: 'contributing',
    message: 'Enter in guidelines for contributing:'.magenta.bold,
    default: 'Contributor Covenant',
  },
  {
    name: 'tests',
    message: 'Enter detail of any test packages in the project:'.magenta.bold,
    validate: emptyInputCheck,
  },
  {
    name: 'github',
    message: 'Enter GitHub username:'.magenta.bold,
    validate: emptyInputCheck,
  },
];

const init = async () => {
  printHeader();
  console.log('Welcome to the README Generator!'.magenta.bold);
  try {
    const data = await inquirer.prompt(questions);
    writeToFile(data);
  } catch (err) {
    console.error(`ERROR - index.js - init(): ${errs}`);
  }
};

init();
