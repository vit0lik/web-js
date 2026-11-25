const readline = require('readline/promises');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function isPerfectSquare(n) {
  const s = Math.round(Math.sqrt(n));
  return s * s === n;
}

function isFibonacci(n) {
  return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

(async () => {
  const n = parseInt(await rl.question('N = '), 10);
  console.log(isFibonacci(n) ? 'Число Фибоначчи' : 'Не число Фибоначчи');
  rl.close();
})();
