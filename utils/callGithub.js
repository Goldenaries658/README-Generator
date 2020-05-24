const axios = require('axios');
const inquirer = require('inquirer');

const callGithub = async (username) => {
  const queryURL = `https://api.github.com/users/${username}`;
  try {
    const response = await axios.get(queryURL);
    const data = response.data
    console.log(response);
    // Checking if there is an email in the response and manually setting one if not
    if (!data.email) {
      console.log('No GitHub email found!'.red.bold);
      const email = await inquirer.prompt({
        name: 'email',
        message: 'Please enter email:'.magenta.bold,
      });
      data.email = email.email
    }
    return data;
  } catch (err) {
    console.error(err);
  }
};

module.exports = callGithub;
