const readline = require('readline/promises');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

(async () => {
  const n = parseInt(await rl.question('N = '), 10);
  const m = parseInt(await rl.question('M = '), 10);
  const result = [];
  for (let x = n; x <= m; x++) {
    const digits = String(Math.abs(x)).split('').map(Number);
    if (digits.includes(0)) continue;
    if (digits.every(d => x % d === 0)) result.push(x);
  }
  console.log(result.length ? result.join(' ') : 'Чисел нет');
  rl.close();
})();
