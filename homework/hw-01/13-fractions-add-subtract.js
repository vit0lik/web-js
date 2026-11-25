const readline = require('readline/promises');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function gcd(a, b) {
  a = Math.abs(a); b = Math.abs(b);
  while (b) [a, b] = [b, a % b];
  return a;
}

function makeFraction(num, den) {
  if (den < 0) { num = -num; den = -den; }
  const g = gcd(num, den) || 1;
  return [num / g, den / g];
}

(async () => {
  const a = parseInt(await rl.question('Числитель 1 = '), 10);
  const b = parseInt(await rl.question('Знаменатель 1 = '), 10);
  const c = parseInt(await rl.question('Числитель 2 = '), 10);
  const d = parseInt(await rl.question('Знаменатель 2 = '), 10);
  const op = await rl.question('Операция (+ или -): ');

  let num, den;
  if (op === '+') {
    [num, den] = [a * d + c * b, b * d];
  } else {
    [num, den] = [a * d - c * b, b * d];
  }
  const [rn, rd] = makeFraction(num, den);
  console.log(`Результат: ${rn}/${rd}`);
  rl.close();
})();
