const readline = require('readline/promises');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function sumDivisors(n) {
  let sum = 1;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      sum += i;
      if (i !== n / i) sum += n / i;
    }
  }
  return sum;
}

(async () => {
  const n = parseInt(await rl.question('N = '), 10);
  const result = [];
  let candidate = 2;
  while (result.length < n) {
    if (sumDivisors(candidate) === candidate) result.push(candidate);
    candidate++;
  }
  console.log(result.join(' '));
  rl.close();
})();
