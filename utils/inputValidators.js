const colors = require('colors');

const emptyInputCheck = async (input) => {
  if (!input) {
    printHeader();
    console.log('You need to input something.'.red.bold);
    return false;
  } else {
    return true;
  }
};

