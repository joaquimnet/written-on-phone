const log = require('consola');
const readline = require('readline');

const { ask } = require('./prompter');

(async () => {
  const res = await ask('Type something.');
  log.info(res);
})();
