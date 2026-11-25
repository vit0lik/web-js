const readline = require('readline/promises');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

(async () => {
  const n = parseInt(await rl.question('N = '), 10);
  const m = parseInt(await rl.question('M = '), 10);
  const triples = [];
  for (let a = n; a <= m; a++) {
    for (let b = a; b <= m; b++) {
      const c2 = a * a + b * b;
      const c = Math.round(Math.sqrt(c2));
      if (c * c === c2 && c >= b && c <= m) triples.push([a, b, c]);
    }
  }
  if (triples.length === 0) console.log('Тройок нет');
  for (const [a, b, c] of triples) console.log(`${a}, ${b}, ${c}`);
  rl.close();
})();
