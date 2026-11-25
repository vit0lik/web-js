const readline = require('readline/promises');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;
  return true;
}

(async () => {
  const n = parseInt(await rl.question('N = '), 10);
  const primes = [];
  let candidate = 2;
  while (primes.length < n) {
    if (isPrime(candidate)) primes.push(candidate);
    candidate++;
  }
  console.log(primes.join(' '));
  rl.close();
})();
