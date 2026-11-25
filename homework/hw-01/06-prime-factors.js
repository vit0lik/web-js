const readline = require('readline/promises');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

(async () => {
  let n = parseInt(await rl.question('N = '), 10);
  const factors = [];
  for (let d = 2; d * d <= n; d++) {
    if (n % d === 0) {
      let order = 0;
      while (n % d === 0) { n /= d; order++; }
      factors.push([d, order]);
    }
  }
  if (n > 1) factors.push([n, 1]);
  console.log(factors.map(([p, k]) => `${p}^${k}`).join(' * '));
  rl.close();
})();
