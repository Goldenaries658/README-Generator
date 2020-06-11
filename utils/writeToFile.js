const inquirer = require('inquirer');
const fs = require('fs');

const printHeader = require('./printHeader');
const generateMarkdown = require('./generateMarkdown');
const callGithub = require('./callGithub');
const emptyInputCheck = require('./inputValidators');

const writeToFile = async (data) => {
  printHeader();
  // RegEx to remove illegal characters from filename and replace with "-"
  let projectName = data.title.split(/(?:,| |\[|\]|\:|\;|\||\*|")+/).join('-');
  let path = `./output/${projectName}`;
  // Writing the new directory and file
  try {
    // Checking if output folder exists and creating one if not
    if (!fs.existsSync('./output')) {
      fs.mkdirSync('./output');
    }
    // Checking if file exists already
    if (!path || fs.existsSync(`${path}/README.md`)) {
      let filenameConfirmed = false;
      // While loop to repeatedly test input
      while (!filenameConfirmed) {
        printHeader();
        const confirmation = await inquirer.prompt({
          type: 'confirm',
          name: 'overwrite',
          message: `${path}/README.md already exists, do you wish to overwrite?`,
        });
        if (!confirmation.overwrite) {
          let title = await inquirer.prompt({
            name: 'title',
            message: 'Enter project title:'.magenta.bold,
            validate: emptyInputCheck,
          });
          let projectName = title
            // RegEx to remove illegal characters from filename and replace with "-"
            // This will treat any special characters as one if they are chained
            .split(/(?:,| |\[|\]|\:|\;|\||\*|")+/)
            .join('-');
          path = `./output/${projectName}`;
        }
        filenameConfirmed = confirmation.overwrite;
      }
    } else if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }

    // Calling github api
    const githubData = await callGithub(data.github);

    // Writing the output file
    fs.writeFile(
      `${path}/README.md`,
      generateMarkdown(projectName, data, githubData),
      (err) => {
        if (err) throw err;
        printHeader();

        // Logging ascii art saying 'Save Complete!'
        console.log(
          `
  _           _                      
 /_\`_    _   / \`_  _ _  _  /_ _/__  /
._//_||//_' /_,/_// / //_///_'/ /_'. 
                      /              
`.white.bgGreen.bold
        );
      }
    );
  } catch (err) {
    console.error(err);
  }
};

module.exports = writeToFile;
