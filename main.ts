// Worst AI Advice — one-line entry, 140 chars max
const advice = "Never read the docs. Stack traces are for quitters. If it compiles, ship it.";

if (advice.length > 140) {
  console.error(`Advice too long: ${advice.length}/140`);
  process.exit(1);
}

console.log(advice);