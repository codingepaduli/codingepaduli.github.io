// espressioni
let y = 5;
let x = 5 * (6 + y);
console.info(y);
console.info(x);

// operatori aritmetici
console.info(3 + 4);
console.info(3 - 4);
console.info(3 * 4);
console.info(3 / 4);
console.info(3 % 4);

let x1 = 3 + 4 * 5;
console.info(x1);
x1++;
console.info(x1);
x1--;
console.info(x1);
console.info(-x1);

// operatori relazionali

console.info(3 < 4);
console.info(3 == 4);
console.info(3 > 4);
console.info(3 != 4);
console.info(4 >= 4);
console.info(4 <= 4);

let x2 = (3 <= 5);
console.info(x2);
console.info(!x2);

// operatori logici

console.info( (3 < 4) && (4 < 5) );
console.info( (3 < 4) || (4 > 5) );
console.info( !(3 < 4) );

let x3 = (3 < 4) && (4 < 5);
console.info(x3);

x3 = (4 > 5) || true;
console.info(x3);

// operatori binari

console.info(3 & 5);
console.info(3 | 5);
console.info(3 ^ 5);
console.info( ~ 5);
console.info(3 << 5);
console.info(3 >> 5);
console.info(3 >>> 5);

let x4 = 3 & 5;
console.info(x4);

// operatori di assegnazione

let x5 = 5;
x5 += 5;
x5 -= 5;
x5 *= 5;
x5 /= 5;
x5 %= 5;
x5 &= 5;
x5 |= 5;
x5 ^= 5;
x5 <<= 5;
x5 >>= 5;
x5 >>>= 5;
