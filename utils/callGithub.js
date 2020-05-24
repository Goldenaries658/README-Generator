const axios = require('axios');

const callGithub = async (username, projectName) => {
  const queryURL = `https://api.github.com/users/${username}`;
  try {
    const response = await axios.get(queryURL);
    return response;
  } catch (err) {
    console.log(err);
  }
};

module.exports = callGithub;
