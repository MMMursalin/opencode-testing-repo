const { add } = require('../src/index');

console.log('Running tests...');

if (add(2, 3) === 5) {
  console.log('✓ Test passed: add(2, 3) === 5');
} else {
  console.error('✗ Test failed: add(2, 3) !== 5');
  process.exit(1);
}

console.log('All tests passed!');