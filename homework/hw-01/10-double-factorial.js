const readline = require('readline/promises');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

(async () => {
  const n = parseInt(await rl.question('N = '), 10);
  let result = 1n;
  if (n % 2 === 0) {
    for (let i = 2; i <= n; i += 2) result *= BigInt(i);
  } else {
    for (let i = 1; i <= n; i += 2) result *= BigInt(i);
  }
  console.log(`${n}!! = ${result}`);
  rl.close();
})();
