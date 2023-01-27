/**
 * None of these commented out imports
 * work outright in browser.
 *
 * It appears you have to wrap it like in `madness.js`
 */

// import sadness from './sadness.js'
// import {default as sadness} from './sadness.js'
// import * as Types from './sadness.js'

import madness from './madness.js';

console.log(
  'browser',
  madness,
  madness.secret.toString()
)

madness.greet('madman')