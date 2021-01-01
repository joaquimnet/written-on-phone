const log = require('consola');
const readline = require('readline');

const ask = (question) => {
  return new Promise((resolve) => {
    log.info(question);

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question('> ', (answer) => {
      // TODO: Log the answer in a database
      resolve(answer);
      rl.close();
    });
  });
};

module.exports = {
  ask,
};

