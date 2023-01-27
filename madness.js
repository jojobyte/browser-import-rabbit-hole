/**
 * This first import correctly loads
 * it into `globalThis` or `window`
 * but does not give type hinting
 */
import './sadness.js'
/**
 * this gives type hinting but
 * an unusable `Types` module
 */
import * as SadnessTypes from './sadness.js'

/** Combining them seems to solve this problem */
/** @type {SadnessTypes} */
let Sadness = window?.Foo2 || globalThis?.Foo2

export default Sadness
