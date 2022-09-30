const consola = require("consola");

 const logger = consola
  .create({
    stdout: process.stdout,
    stderr: process.stderr,
  })
  .withScope("package-lock-version");

module.exports = { logger };
