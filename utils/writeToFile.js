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
          projectName = data.title
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
    console.log(githubData);
    const blah = await inquirer.prompt({
      name: 'test',
      message: 'blah',
    });

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
  } catch (error) {
    console.log(error);
  }
};

module.exports = writeToFile;
