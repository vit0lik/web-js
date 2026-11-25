const readline = require('readline/promises');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

(async () => {
  const n = parseInt(await rl.question('N = '), 10);
  const divisors = [];
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
      if (i !== n / i) divisors.push(n / i);
    }
  }
  divisors.sort((a, b) => a - b);
  console.log(divisors.join(' '));
  rl.close();
})();
