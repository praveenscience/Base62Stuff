const base62 = require("base62");
const custom = require("base62");
console.log("Hello!");

if (false) {
  console.time("Base64 Benchmarks - 1");
  console.log(base62.encode(35007));
  console.log(base62.encode(999));
  console.log(base62.decode("999"));
  console.log(base62.decode("g7"));
  console.log(base62.decode("96D"));
  console.log(base62.decode("Praveen"));
  console.timeEnd("Base64 Benchmarks - 1")

  console.time("Base64 Benchmarks - 2: Loop");
  for (let index = 0; index < 65; index++) {
    console.log(`#${index}: ${base62.encode(index)}`);
  }
  console.timeEnd("Base64 Benchmarks - 2: Loop");
}

if (false) {
  custom.setCharacterSet("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
  console.time("Custom Benchmarks - 1");
  console.log(custom.encode(35007));
  console.log(custom.encode(999));
  console.log(custom.decode("999"));
  console.log(custom.decode("g7"));
  console.log(custom.decode("96D"));
  console.log(custom.decode("Praveen"));
  console.timeEnd("Custom Benchmarks - 1")

  console.time("Custom Benchmarks - 2: Loop");
  for (let index = 0; index < 65; index++) {
    console.log(`#${index}: ${custom.encode(index)}`);
  }
  console.timeEnd("Custom Benchmarks - 2: Loop");
}

if (true) {
  console.time("Hello World");
  console.log(base62.decode("a a"));
  console.log(base62.decode("aa"));
  console.log(base62.decode(" a"));
  console.log(base62.decode("a "));
  console.log(base62.decode(" "));
  console.log(base62.encode(10));
  console.log(base62.encode(-10));
  console.log(base62.encode(0));
  console.log(base62.encode("10"));
  console.timeEnd("Hello World");
}
