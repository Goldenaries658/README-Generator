const colors = require('colors');

const printHeader = async () => {
  const header = `
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    _____ _____ _____ ____  _____ _____    _____                     _           
   |  __ |   __|  _  |    \\|     |   __|  |   __|___ ___ ___ ___ ___| |_ ___ ___ 
   |    -|   __|     |  |  | | | |   __|  |  |  | -_|   | -_|  _| .'|  _| . |  _|
   |__|__|_____|__|__|____/|_|_|_|_____|  |_____|___|_|_|___|_| |__,|_| |___|_|  

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
`.yellow.bold;

  console.clear();
  console.log(header);
};
module.exports = printHeader;