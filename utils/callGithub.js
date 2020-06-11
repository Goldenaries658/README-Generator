const axios = require('axios');
const inquirer = require('inquirer');
const printHeader = require('./printHeader');

const emailValidator = async (email) => {
  // Regex that checks for a valid email string
  valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

  if (valid) {
    return true;
  } else {
    console.clear();
    printHeader();
    console.log('Invalid email entered!'.red.bold);
    return false;
  }
};

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
