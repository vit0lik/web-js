const readline = require('readline/promises');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

(async () => {
  const n = parseInt(await rl.question('N = '), 10);
  const sieve = new Array(n + 1).fill(true);
  sieve[0] = sieve[1] = false;
  for (let i = 2; i * i <= n; i++) {
    if (sieve[i]) for (let j = i * i; j <= n; j += i) sieve[j] = false;
  }
  const primes = [];
  for (let i = 2; i <= n; i++) if (sieve[i]) primes.push(i);
  console.log(primes.join(' '));
  rl.close();
})();
