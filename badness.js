/**
 * In VSCode, you get type hinting
 * from this import, however it
 * results in an error in browser
 *
 * Uncaught SyntaxError: The requested module './sadness.js' does not provide an export named 'default' (at badness.js:6:8)
 */
import sadness from './sadness.js'
/**
 * This appears to load but `greet` &
 * `secret` are unreachable, and
 * `sadness` is a `Module`
 */
// import * as sadness from './sadness.js'

/**
 * This code doesnt ever run
 */
console.log(
  'browser',
  sadness,
  sadness.secret.toString()
)

sadness.greet('bad man')
