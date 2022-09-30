#!/usr/bin/env node

const lockfileInfo = require('lockfile-info');
const argsParser = require("args-parser");
const { logger } = require("./logger");

const run = async() => {
  const { lock } = argsParser(process.argv);

  if (!lock) {
    logger.error("You must specify a version with --lock");

    process.exit(1);
  }

  const { lockfileVersion } = await lockfileInfo();

  logger.info("Lockfile set to", lockfileVersion);

  if (lockfileVersion !== parseInt(lock)) {
    logger.error("Does not match supplied version of", lock);

    process.exit(1);
  }

  logger.success("Matches", lock);
};

run();
