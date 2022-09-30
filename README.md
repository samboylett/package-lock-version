# package-lock-version

[![npm version](https://badge.fury.io/js/package-lock-version.svg)](https://badge.fury.io/js/package-lock-version)

Simple package to help enforce a lock file version on your CI pipeline.

When multiple devs work on a project, they may have different versions of node or npm which means the package-lock version can change between devs. This enforces a version, ensuring devs on the wrong version of npm for your project have to change to the correct version.

# Usage
