const inquirer = require('inquirer');
const fs = require('fs');

const printHeader = require('./printHeader');

const projectSelect = async () => {
  let path = await inquirer.prompt({
    name: 'changeDefault',
    message: 'Enter output directory path or leave blank for default'
      .magenta.bold,
    default: '~/Documents/my-project/',
  });
  path = path.changeDefault + 'README.md';
  return path
};

module.exports = writeToFile;
