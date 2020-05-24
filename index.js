const fs = require('fs');
const axios = require('axios');
const inquirer = require('inquirer');
const util = require('util');
const colors = require('colors');

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
];

const writeToFile = (fileName, data) => {};

const init = () => {};

init();
