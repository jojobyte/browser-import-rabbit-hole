/**
 * It appears Node.js is able to use the
 * IIFE modules directly with `require`
 * and `import` while browser needs
 * a wrapper
 */
// import madness from './madness.js';
import sadness from './sadness.js';

console.log(
  'cli',
  sadness,
  sadness.secret.toString()
)

sadness.greet('cry baby')