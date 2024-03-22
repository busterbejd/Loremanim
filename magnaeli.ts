
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

for await (const line of rl) {
  console.log(`Line: ${line}`);
}

