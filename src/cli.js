#!/usr/bin/env node

const lockfileInfo = require('lockfile-info');

const run = async() => {
  const { lockfileVersion } = await lockfileInfo();

  if (lockfileVersion !== 2) {
    process.exit(1);
  }

  process.stdout.write("All good!\n");
};

run();
