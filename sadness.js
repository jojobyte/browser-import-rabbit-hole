/**
 * @typedef Foo2
 * @prop {Greet2} greet
 * @prop {Uint8Array} secret
 */

/**
 * @callback Greet2
 * @param {String} name
 * @returns {void}
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