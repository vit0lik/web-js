const readline = require('readline/promises');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function gcd(a, b) {
  while (b) [a, b] = [b, a % b];
  return a;
}

(async () => {
  const a = parseInt(await rl.question('a = '), 10);
  const b = parseInt(await rl.question('b = '), 10);
  console.log(gcd(a, b) === 1 ? 'Взаимно просты' : 'Не взаимно просты');
  rl.close();
})();
