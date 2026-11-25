const readline = require('readline/promises');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;
  return true;
}

(async () => {
  const n = parseInt(await rl.question('N = '), 10);
  const m = parseInt(await rl.question('M = '), 10);
  const primes = [];
  for (let i = 2; i <= m; i++) if (isPrime(i)) primes.push(i);

  let any = false;
  for (let x = n % 2 === 0 ? n + 1 : n; x <= m; x += 2) {
    let found = null;
    outer: for (let i = 0; i < primes.length && primes[i] <= x; i++) {
      for (let j = i; j < primes.length && primes[i] + primes[j] <= x; j++) {
        const rest = x - primes[i] - primes[j];
        if (primes.includes(rest) && rest >= primes[j]) {
          found = [primes[i], primes[j], rest];
          break outer;
        }
      }
    }
    if (found) {
      any = true;
      console.log(`${x} = ${found.join(' + ')}`);
    }
  }
  if (!any) console.log('Чисел нет');
  rl.close();
})();
