const inquirer = require('inquirer');
const fs = require('fs');

const printHeader = require('./printHeader');
const generateMarkdown = require('./generateMarkdown');
const callGithub = require('./callGithub');

// Writing the new directory and file
const writeToFile = async (data) => {
  printHeader();
  let projectName = data.title.split(/(?:,| |\[|\]|\:|\;|\||\*|")+/).join('-');
  let path = `./output/${projectName}`;

  try {
    // Checking if output folder exists and creating one if not
    if (!fs.existsSync('./output')){
      fs.mkdirSync('./output')
    }
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
        if (!confirmation.overwrite) {
          let title = await inquirer.prompt({
            name: 'title',
            message: 'Enter project title:'.magenta.bold,
          });
          let projectName = title
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
    printHeader();
    fs.writeFile(
      `${path}/README.md`,
      generateMarkdown(projectName, data, githubData),
      (err) => {
        if (err) throw err;
        console.log('saved');
      }
    );
  } catch (err) {
    console.error(err);
  }
};

module.exports = writeToFile;
