const { execSync } = require('child_process');
const { EOL } = require('os');

const sh = command => execSync(command, { encoding: 'utf8' });


const gitStatus = sh('git status --short');
if (gitStatus) {
  throw new Error(`Working directory is not clean${EOL}${gitStatus}`);
}

// execSync('git checkout master');
