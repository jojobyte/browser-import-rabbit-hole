# Browser `import` Rabbit Hole

Deducing a way to use IIFE modules that do not provide `export default` or `export let rabbit = 'hole'` in browser and preserving JSDoc type hinting.

## TL;DR
### Wrap it

```js
// sadness.js
// the IIFE module you want to wrap

/**
 * @typedef Foo2
 * @prop {Greet2} greet
 * @prop {Uint8Array} secret
 */

/**
 * @callback Greet2
 * @param {String} name
 */

/** @type {Foo2} */
var Foo2 = ("object" === typeof module && exports) || {};

(function (window, Foo2) {
  "use strict";

  let Crypto = window.crypto || require("node:crypto");

  Foo2.secret = new Uint8Array(16);
  Crypto.getRandomValues(Foo2.secret);

  Foo2.greet = function (name) {
    console.log(`Hello, ${name}!`);
  };

  window.Foo2 = Foo2;
})(/** @type {Window} */ (globalThis.window || {}), Foo2);

if ("object" === typeof module) {
  module.exports = Foo2;
}
```

```js
// madness.js
// Wrapper module
import './sadness.js'
import * as Types from './sadness.js'

/** @type {Types} */
let Sadness = window.Foo2

export default Sadness
```

```html
<!-- index.html -->
<script type="module">
/**
 * now this works in modern browsers
 * with no transpilation and gives
 * JSDoc type hinting
 */
import madness from './madness.js';

console.log(
  'browser',
  madness,
  madness.secret.toString()
)

madness.greet('madman')
</script>
```