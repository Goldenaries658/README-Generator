const axios = require('axios');
const inquirer = require('inquirer');

const callGithub = async (username, projectName) => {
  const queryURL = `https://api.github.com/users/${username}`;
  try {
    const response = await axios.get(queryURL);
    // Checking if there is an email in the response and manually setting one if not
    if (!response.email) {
      console.log('No GitHub email found!'.red.bold);
      const email = await inquirer.prompt({
        type: 'confirm',
        name: email,
        message: 'Please enter email:'.magenta.bold,
      });
      response.email = email
    }
    return response;
  } catch (err) {
    console.log(err);
  }
};

module.exports = callGithub;
