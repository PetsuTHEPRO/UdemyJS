let a = 7;
let b = 94;

let auxVarivel = a;
let a = b;
let b = auxVarivel;

[a, b] = [b, a];

console.log(a + " " + b)
