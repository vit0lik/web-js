function gcd(a, b) {
  a = Math.abs(a); b = Math.abs(b);
  while (b) [a, b] = [b, a % b];
  return a;
}

function areCoprime(a, b) {
  return gcd(a, b) === 1;
}

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;
  return true;
}

function sievePrimes(n) {
  const sieve = new Array(n + 1).fill(true);
  sieve[0] = sieve[1] = false;
  for (let i = 2; i * i <= n; i++) {
    if (sieve[i]) for (let j = i * i; j <= n; j += i) sieve[j] = false;
  }
  const primes = [];
  for (let i = 2; i <= n; i++) if (sieve[i]) primes.push(i);
  return primes;
}

function firstPrimes(n) {
  const primes = [];
  let candidate = 2;
  while (primes.length < n) {
    if (isPrime(candidate)) primes.push(candidate);
    candidate++;
  }
  return primes;
}

function divisors(n) {
  const result = [];
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      result.push(i);
      if (i !== n / i) result.push(n / i);
    }
  }
  return result.sort((a, b) => a - b);
}

function primeFactors(n) {
  const factors = [];
  for (let d = 2; d * d <= n; d++) {
    if (n % d === 0) {
      let order = 0;
      while (n % d === 0) { n /= d; order++; }
      factors.push([d, order]);
    }
  }
  if (n > 1) factors.push([n, 1]);
  return factors;
}

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

function isPerfect(n) {
  return n > 1 && sumDivisors(n) === n;
}

function firstPerfectNumbers(n) {
  const result = [];
  let candidate = 2;
  while (result.length < n) {
    if (isPerfect(candidate)) result.push(candidate);
    candidate++;
  }
  return result;
}

function threePrimesRepresentations(n, m) {
  const primes = sievePrimes(m);
  const primeSet = new Set(primes);
  const result = [];
  for (let x = n % 2 === 0 ? n + 1 : n; x <= m; x += 2) {
    outer: for (let i = 0; i < primes.length && primes[i] <= x; i++) {
      for (let j = i; j < primes.length && primes[i] + primes[j] <= x; j++) {
        const rest = x - primes[i] - primes[j];
        if (primeSet.has(rest) && rest >= primes[j]) {
          result.push([x, [primes[i], primes[j], rest]]);
          break outer;
        }
      }
    }
  }
  return result;
}

function isFibonacci(n) {
  const isSquare = (x) => {
    const s = Math.round(Math.sqrt(x));
    return s * s === x;
  };
  return isSquare(5 * n * n + 4) || isSquare(5 * n * n - 4);
}

function doubleFactorial(n) {
  let result = 1n;
  const start = n % 2 === 0 ? 2 : 1;
  for (let i = start; i <= n; i += 2) result *= BigInt(i);
  return result;
}

function pythagoreanTriples(n, m) {
  const result = [];
  for (let a = n; a <= m; a++) {
    for (let b = a; b <= m; b++) {
      const c2 = a * a + b * b;
      const c = Math.round(Math.sqrt(c2));
      if (c * c === c2 && c >= b && c <= m) result.push([a, b, c]);
    }
  }
  return result;
}

function reduceFraction(num, den) {
  if (den < 0) { num = -num; den = -den; }
  const g = gcd(num, den) || 1;
  return [num / g, den / g];
}

function multiplyFractions(a, b, c, d) {
  return reduceFraction(a * c, b * d);
}

function divideFractions(a, b, c, d) {
  return reduceFraction(a * d, b * c);
}

function addFractions(a, b, c, d) {
  return reduceFraction(a * d + c * b, b * d);
}

function subtractFractions(a, b, c, d) {
  return reduceFraction(a * d - c * b, b * d);
}

function numbersDivisibleByDigits(n, m) {
  const result = [];
  for (let x = n; x <= m; x++) {
    const digits = String(Math.abs(x)).split('').map(Number);
    if (digits.includes(0)) continue;
    if (digits.every((d) => x % d === 0)) result.push(x);
  }
  return result;
}

function numbersDivisibleByDigitSum(n, m) {
  const result = [];
  for (let x = n; x <= m; x++) {
    const sum = String(Math.abs(x)).split('').reduce((s, d) => s + Number(d), 0);
    if (sum !== 0 && x % sum === 0) result.push(x);
  }
  return result;
}

module.exports = {
  gcd,
  areCoprime,
  isPrime,
  sievePrimes,
  firstPrimes,
  divisors,
  primeFactors,
  sumDivisors,
  isPerfect,
  firstPerfectNumbers,
  threePrimesRepresentations,
  isFibonacci,
  doubleFactorial,
  pythagoreanTriples,
  reduceFraction,
  multiplyFractions,
  divideFractions,
  addFractions,
  subtractFractions,
  numbersDivisibleByDigits,
  numbersDivisibleByDigitSum,
};

if (require.main === module) {
  console.log('1.1', areCoprime(12, 18));
  console.log('1.2', isPrime(29));
  console.log('1.3', sievePrimes(30).join(' '));
  console.log('1.4', firstPrimes(10).join(' '));
  console.log('1.5', divisors(28).join(' '));
  console.log('1.6', primeFactors(360).map(([p, k]) => `${p}^${k}`).join(' * '));
  console.log('1.7', firstPerfectNumbers(3).join(' '));
  console.log('1.8', threePrimesRepresentations(9, 20).map(([x, t]) => `${x} = ${t.join(' + ')}`).join(', '));
  console.log('1.9', isFibonacci(144));
  console.log('1.10', `${7}!! = ${doubleFactorial(7)}`);
  console.log('1.11', pythagoreanTriples(1, 20).map((t) => t.join(',')).join('; '));
  console.log('1.12', multiplyFractions(1, 2, 3, 4).join('/'));
  console.log('1.13', addFractions(1, 2, 1, 3).join('/'));
  console.log('1.14', numbersDivisibleByDigits(1, 25).join(' '));
  console.log('1.15', numbersDivisibleByDigitSum(1, 25).join(' '));
}
