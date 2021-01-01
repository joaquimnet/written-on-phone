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
      resolve(answer);
      rl.close();
    });
  });
};

const picker = (question, options) => {
  return new Promise((resolve) => {
    log.info(question);
    for (let i; i < options.length; i++) {
      log.info(i + 1 + '. ' + options[i]);
    }
    ask('').then((answer) => {
      resolve(options[Number(answer)]);
    });
  });
};

module.exports = {
  ask,
  picker,
};
