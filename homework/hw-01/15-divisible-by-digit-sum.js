const readline = require('readline/promises');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

(async () => {
  const n = parseInt(await rl.question('N = '), 10);
  const m = parseInt(await rl.question('M = '), 10);
  const result = [];
  for (let x = n; x <= m; x++) {
    const sum = String(Math.abs(x)).split('').reduce((s, d) => s + Number(d), 0);
    if (sum !== 0 && x % sum === 0) result.push(x);
  }
  console.log(result.length ? result.join(' ') : 'Чисел нет');
  rl.close();
})();
