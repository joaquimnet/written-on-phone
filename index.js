const log = require('consola');

const { ask } = require('./prompter');

(async () => {
  log.info('Welcome to this awesome program!');
  const res = await ask('Type something.');
  log.info('>>> ', res.toUpperCase());
})();
