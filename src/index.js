const { sum } = require('./sum');

function main() {
  const a = 2, b = 3;
  const result = sum(a, b);
  console.log(`Sum demo: ${a} + ${b} = ${result}`);
}

if (require.main === module) {
  main();
}

module.exports = { main };
