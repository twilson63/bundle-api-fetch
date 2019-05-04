import { done } from 'tape-modern'
import color from 'tap-browser-color'
import '../../src/test.js'

color()

window.done = done
