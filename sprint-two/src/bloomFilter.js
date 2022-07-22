const murmur = require('murmurhash-js');
const XXH = require('xxhashjs');
const fnv = require('fnv-plus');
// murmur.murmur2(KEY, SEED) OR murmur.murmur3(KEY, SEED)
// string KEY and positive integer SEED


// let seed1 = Math.floor(Math.random() * 2e32);
// let seed2 = Math.floor(Math.random() * 2e32);
let seed1 = Math.floor(Math.random() * 32);
let seed2 = Math.floor(Math.random() * 32);

let m = 18; // # of slots
let k = 3; // # of hash functions


let n = 100;
let falseRate = [];
for (let i = 1; i < 20; i++) {
  let falsePs = [];
  for (let a = 0; a < 10000; a++) {
    let bloombox = Array(m).fill(0);
    let arr = [];
    for (let j = 0; j < i; j++) {
      let x;
      do {
        x = Math.floor(Math.random() * 2000).toString();
      } while ( arr.includes(x) );
      arr.push(x);
      let i0 = murmur.murmur2(x, seed1) % m;
      let i1 = fnv.fast1a32(x) % m;
      let i2 = XXH.h32(x, seed2).toNumber() % m;
      bloombox[i0] = 1;
      bloombox[i1] = 1;
      bloombox[i2] = 1;
    }
    // console.log(arr);
    // console.log(bloombox);
    let falses = 0;
    for (let j = 0; j < 2000; j++) {
      let x = j.toString();
      let i0 = murmur.murmur2(x, seed1) % m;
      let i1 = fnv.fast1a32(x) % m;
      let i2 = XXH.h32(x, seed2).toNumber() % m;
      if (bloombox[i0] && bloombox[i1] && bloombox[i2]) {
        if (!arr.includes(x)) {
          falses++;
        }
      }
    }
    falsePs.push(falses / (2000 - i));
  }
  falsePs = falsePs.reduce((a, b) => a + b) / falsePs.length;
  console.log(falsePs);
  falseRate.push(falsePs);
}
console.table(falseRate);