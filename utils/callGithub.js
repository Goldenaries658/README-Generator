const axios = require('axios');
const inquirer = require('inquirer');
const emailValidator = require('./inputValidators');

const callGithub = async (username) => {
  const queryURL = `https://api.github.com/users/${username}`;
  try {
    const response = await axios.get(queryURL);
    const data = response.data;
    // Checking if there is an email in the response and manually setting one if not
    if (!data.email) {
      console.log('No GitHub email found!'.red.bold);
      const emailPrompt = await inquirer.prompt({
        name: 'email',
        message: 'Please enter email:'.magenta.bold,
        validate: emailValidator,
      });
      data.email = emailPrompt.email;
    }
    return data;
  } catch (err) {
    console.error(err);
  }
};

module.exports = callGithub;
