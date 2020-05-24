const inquirer = require('inquirer');
const fs = require('fs');

const printHeader = require('./printHeader');
const generateMarkdown = require('./generateMarkdown');

// Prompting for a project name and setting directory
const projectSelect = async () => {
  let path = await inquirer.prompt({
    name: 'projectName',
    message: 'Enter project name or leave blank for default.'.magenta.bold,
    default: 'my-project',
  });
  // Removing unwanted characters from filename and replacing with '-'
  const projectName = path.projectName.split(/(?:,| |\[|\]|\:|\;|\||\*|")+/).join('-');
  path = `./output/${projectName}`;
  return path;
};

// Writing the new directory and file
const writeToFile = async (data) => {
  printHeader();
  let path = await projectSelect();

  try {
    // Checking if file exists already
    if (fs.existsSync(`${path}/README.md`)) {
      let filenameConfirmed = false;
      // While loop to repeatedly test input
      while (!filenameConfirmed) {
        printHeader();
        const confirmation = await inquirer.prompt({
          type: 'confirm',
          name: 'overwrite',
          message: `${path}/README.md already exists, do you wish to overwite?`,
        });
        filenameConfirmed = confirmation.overwrite;
      }
    } else {
      fs.mkdirSync(path);
    }
    printHeader();
    fs.writeFile(`${path}/README.md`, generateMarkdown(data), (err) => {
      if (err) throw err;
      console.log('saved');
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = writeToFile;
